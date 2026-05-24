"use client";

import { useState, useMemo } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import { copyToClipboard } from "@/lib/utils";

function parseMarkdown(md: string): string {
  let html = md;
  // Headers
  html = html.replace(/^### (.*$)/gm, "<h3 class='text-lg font-semibold text-white mt-4 mb-2'>$1</h3>");
  html = html.replace(/^## (.*$)/gm, "<h2 class='text-xl font-bold text-white mt-5 mb-2'>$1</h2>");
  html = html.replace(/^# (.*$)/gm, "<h1 class='text-2xl font-bold text-white mt-6 mb-3'>$1</h1>");
  // Bold & Italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  // Code
  html = html.replace(/`(.*?)`/g, "<code class='px-1.5 py-0.5 rounded bg-white/10 text-primary-400 text-sm font-mono'>$1</code>");
  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2' class='text-primary-400 underline'>$1</a>");
  // Lists
  html = html.replace(/^\- (.*$)/gm, "<li class='ml-4 list-disc text-dark-300'>$1</li>");
  html = html.replace(/^\d+\. (.*$)/gm, "<li class='ml-4 list-decimal text-dark-300'>$1</li>");
  // Blockquote
  html = html.replace(/^> (.*$)/gm, "<blockquote class='border-l-2 border-primary-500 pl-4 text-dark-400 italic my-2'>$1</blockquote>");
  // Horizontal rule
  html = html.replace(/^---$/gm, "<hr class='border-white/10 my-4' />");
  // Line breaks
  html = html.replace(/\n\n/g, "<br/><br/>");
  html = html.replace(/\n/g, "<br/>");
  return html;
}

const sampleMd = `# Hello World

## Introduction

This is a **Markdown Previewer**. Try editing this text!

### Features

- Real-time preview
- **Bold** and *italic* text
- Code snippets: \`const x = 42\`
- [Links](https://aividyou.com)

> This is a blockquote

---

1. First item
2. Second item
3. Third item

***Bold italic text***
`;

export default function MarkdownClient() {
  const [input, setInput] = useState(sampleMd);
  const [copied, setCopied] = useState(false);

  const rendered = useMemo(() => parseMarkdown(input), [input]);

  const handleCopy = async () => {
    await copyToClipboard(rendered);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <UtilityLayout title="Markdown Previewer" description="Write and preview Markdown content in real-time">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-dark-300">Markdown</label>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-[400px] px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 resize-none font-mono text-sm"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-dark-300">Preview</label>
            <button onClick={handleCopy} className="text-xs text-primary-400 hover:text-primary-300">
              {copied ? "Copied HTML!" : "Copy HTML"}
            </button>
          </div>
          <div
            className="w-full h-[400px] px-4 py-3 bg-white/5 border border-white/10 rounded-xl overflow-y-auto text-dark-300 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: rendered }}
          />
        </div>
      </div>
    </UtilityLayout>
  );
}
