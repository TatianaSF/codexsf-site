import fs from "node:fs";
import path from "node:path";

export type ContentItem = {
  slug: string;
  title: string;
  description: string;
  order: number;
  date?: string;
  status?: string;
  body: string;
};

const contentRoot = path.join(process.cwd(), "content");

function parseFrontmatter(file: string) {
  const match = file.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    return {
      data: {},
      body: file
    };
  }

  const data = Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(":");
        const key = line.slice(0, separator).trim();
        const value = line.slice(separator + 1).trim();
        return [key, value];
      })
  ) as Record<string, string>;

  return {
    data,
    body: match[2]
  };
}

export function getCollection(collection: "events" | "hackkit" | "resources") {
  const directory = path.join(contentRoot, collection);

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const parsed = parseFrontmatter(
        fs.readFileSync(path.join(directory, file), "utf8")
      );

      return {
        slug,
        title: parsed.data.title ?? slug,
        description: parsed.data.description ?? "",
        order: Number(parsed.data.order ?? 99),
        date: parsed.data.date,
        status: parsed.data.status,
        body: parsed.body.trim()
      } satisfies ContentItem;
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}
