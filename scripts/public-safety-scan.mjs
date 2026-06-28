import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";

const allowedEnvFiles = new Set([".env.example"]);
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
  ".txt",
  ".webmanifest",
  ".yml",
  ".yaml"
]);

const blockedPathSegments = new Set([
  "attendee-list",
  "attendee-lists",
  "budget",
  "budgets",
  "contact",
  "contacts",
  "draft",
  "drafts",
  "internal",
  "ops",
  "partner-notes",
  "private",
  "speaker-notes",
  "volunteer-assignments"
]);

const highConfidenceSecretPatterns = [
  {
    name: "private key block",
    pattern: /-----BEGIN (?:RSA |DSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/i
  },
  {
    name: "GitHub token",
    pattern: /\b(?:ghp|gho|ghu|ghs|ghr|github_pat)_[A-Za-z0-9_]{20,}\b/
  },
  {
    name: "OpenAI API key",
    pattern: /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/
  },
  {
    name: "Stripe secret key",
    pattern: /\b(?:sk_live|rk_live)_[A-Za-z0-9]{20,}\b/
  },
  {
    name: "Slack token",
    pattern: /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/
  },
  {
    name: "AWS access key",
    pattern: /\bAKIA[0-9A-Z]{16}\b/
  },
  {
    name: "Google API key",
    pattern: /\bAIza[0-9A-Za-z_-]{35}\b/
  }
];

const suspiciousAssignmentPattern =
  /\b(?:api[_-]?key|secret|token|password|private[_-]?key|client[_-]?secret|access[_-]?token)\b\s*[:=]\s*["']?([A-Za-z0-9_.+/=-]{12,})["']?/gi;

const placeholderPattern =
  /^(?:example|placeholder|token_from_google|changeme|change_me|your_|xxx+|todo|false|null|undefined)$/i;

const personalContactPatterns = [
  {
    name: "email address",
    pattern: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
  },
  {
    name: "US phone number",
    pattern: /\b(?:\+?1[\s.-]?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}\b/
  }
];

function trackedFiles() {
  const output = execFileSync(
    "git",
    ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
    {
      encoding: "utf8"
    }
  );

  return output.split("\0").filter(Boolean);
}

function isTextFile(file) {
  return textExtensions.has(path.extname(file).toLowerCase());
}

function normalizedSegments(file) {
  return file
    .split(/[\\/]+/)
    .map((segment) => segment.toLowerCase().replace(/\.[^.]+$/, ""));
}

function shouldScanContacts(file) {
  return /^(app|components|content|docs|README\.md|AGENTS\.md)/.test(file);
}

const findings = [];

for (const file of trackedFiles()) {
  const normalized = file.replace(/\\/g, "/");
  const base = path.basename(normalized);

  if (base.startsWith(".env") && !allowedEnvFiles.has(base)) {
    findings.push(`${file}: tracked env file is not allowed`);
    continue;
  }

  const segments = normalizedSegments(normalized);
  const blockedSegment = segments.find((segment) =>
    blockedPathSegments.has(segment)
  );

  if (blockedSegment && !normalized.startsWith("docs/")) {
    findings.push(`${file}: private-ops path segment "${blockedSegment}"`);
  }

  if (!isTextFile(normalized)) {
    continue;
  }

  const text = readFileSync(file, "utf8");

  for (const { name, pattern } of highConfidenceSecretPatterns) {
    if (pattern.test(text)) {
      findings.push(`${file}: possible ${name}`);
    }
  }

  let assignmentMatch;
  while ((assignmentMatch = suspiciousAssignmentPattern.exec(text))) {
    const value = assignmentMatch[1];

    if (!placeholderPattern.test(value)) {
      findings.push(`${file}: suspicious secret-like assignment`);
    }
  }

  if (/^content\//.test(normalized)) {
    const statusMatch = text.match(/^status:\s*(.+)$/im);
    const status = statusMatch?.[1]?.trim().toLowerCase();

    if (status && /^(draft|private|internal|unpublished)$/.test(status)) {
      findings.push(`${file}: non-public content status "${status}"`);
    }
  }

  if (shouldScanContacts(normalized)) {
    for (const { name, pattern } of personalContactPatterns) {
      if (pattern.test(text)) {
        findings.push(`${file}: possible private ${name}`);
      }
    }
  }
}

if (findings.length > 0) {
  console.error("Public safety scan failed:");
  for (const finding of findings) {
    console.error(`- ${finding}`);
  }
  process.exit(1);
}

console.log("Public safety scan passed.");
