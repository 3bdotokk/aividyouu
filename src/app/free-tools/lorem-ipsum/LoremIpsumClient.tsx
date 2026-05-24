"use client";

import { useState } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import { copyToClipboard } from "@/lib/utils";

const loremWords = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum", "perspiciatis", "unde",
  "omnis", "iste", "natus", "error", "voluptatem", "accusantium", "doloremque",
  "laudantium", "totam", "rem", "aperiam", "eaque", "ipsa", "quae", "ab", "illo",
  "inventore", "veritatis", "quasi", "architecto", "beatae", "vitae", "dicta",
];

function generateSentence(): string {
  const len = Math.floor(Math.random() * 10) + 6;
  const words = Array.from({ length: len }, () => loremWords[Math.floor(Math.random() * loremWords.length)]);
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ") + ".";
}

function generateParagraph(): string {
  const sentences = Math.floor(Math.random() * 4) + 3;
  return Array.from({ length: sentences }, () => generateSentence()).join(" ");
}

export default function LoremIpsumClient() {
  const [count, setCount] = useState(3);
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (type === "paragraphs") {
      setOutput(Array.from({ length: count }, () => generateParagraph()).join("\n\n"));
    } else if (type === "sentences") {
      setOutput(Array.from({ length: count }, () => generateSentence()).join(" "));
    } else {
      const words = Array.from({ length: count }, () => loremWords[Math.floor(Math.random() * loremWords.length)]);
      setOutput(words.join(" "));
    }
  };

  const handleCopy = async () => {
    await copyToClipboard(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <UtilityLayout title="Lorem Ipsum Generator" description="Generate placeholder text for your designs and layouts">
      <div className="space-y-6">
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-1">Count</label>
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-24 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-1">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as typeof type)}
              className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-dark-300 focus:outline-none text-sm"
            >
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </select>
          </div>
          <button
            onClick={generate}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all"
          >
            Generate
          </button>
        </div>

        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-dark-300">Output</label>
              <button onClick={handleCopy} className="text-xs text-primary-400 hover:text-primary-300">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl max-h-80 overflow-y-auto">
              <p className="text-sm text-dark-300 leading-relaxed whitespace-pre-wrap">{output}</p>
            </div>
          </div>
        )}
      </div>
    </UtilityLayout>
  );
}
