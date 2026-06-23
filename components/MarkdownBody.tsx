import type { ReactNode } from "react";
import { TatianaLink } from "@/components/TatianaLink";

const tatianaNamePattern =
  /(Tatiana SF|Tatyana SF|TatyanaSF|Татьяна SF|ТатьянаSF|Татьяна СФ|Татьяна|TatianaSF)/giu;

function renderTextWithTatianaLinks(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(tatianaNamePattern)) {
    const start = match.index ?? 0;

    if (start > lastIndex) {
      nodes.push(text.slice(lastIndex, start));
    }

    nodes.push(<TatianaLink key={`${keyPrefix}-tatiana-${start}`} />);
    lastIndex = start + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  const nodes: ReactNode[] = [];

  parts.forEach((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      nodes.push(<code key={index}>{part.slice(1, -1)}</code>);
      return;
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push(
        <strong key={index}>
          {renderTextWithTatianaLinks(part.slice(2, -2), `strong-${index}`)}
        </strong>
      );
      return;
    }

    nodes.push(...renderTextWithTatianaLinks(part, `text-${index}`));
  });

  return nodes;
}

export function MarkdownBody({ body }: { body: string }) {
  const lines = body.trim().split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    nodes.push(
      <ul key={`ul-${nodes.length}`}>
        {listItems.map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      nodes.push(<h3 key={line}>{renderInline(line.slice(4))}</h3>);
      continue;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      continue;
    }

    flushList();
    nodes.push(<p key={`${line}-${nodes.length}`}>{renderInline(line)}</p>);
  }

  flushList();

  return <div className="markdown-body">{nodes}</div>;
}
