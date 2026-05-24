"use client";

import { useState } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import { copyToClipboard } from "@/lib/utils";

export default function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [indent, setIndent] = useState(2);

  const format = () => {
    setError("");
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
    } catch (e) {
      setError("Invalid JSON: " + (e as Error).message);
      setOutput("");
    }
  };

  const minify = () => {
    setError("");
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
    } catch (e) {
      setError("Invalid JSON: " + (e as Error).message);
      setOutput("");
    }
  };

  const handleCopy = async () => {
    await copyToClipboard(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <UtilityLayout title="JSON Formatter" description="Format, validate, and beautify JSON data">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-dark-300 mb-2">Input JSON</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"key": "value", "array": [1, 2, 3]}'
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 resize-none font-mono text-sm"
            rows={8}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={format}
            disabled={!input.trim()}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm disabled:opacity-50 hover:from-primary-500 hover:to-purple-500 transition-all"
          >
            Format
          </button>
          <button
            onClick={minify}
            disabled={!input.trim()}
            className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-sm text-white hover:bg-white/20 transition-all disabled:opacity-50"
          >
            Minify
          </button>
          <div className="flex items-center gap-2">
            <label className="text-xs text-dark-400">Indent:</label>
            <select
              value={indent}
              onChange={(e) => setIndent(parseInt(e.target.value))}
              className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-dark-300"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>Tab</option>
            </select>
          </div>
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-dark-300">Output</label>
              <button onClick={handleCopy} className="text-xs text-primary-400 hover:text-primary-300">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="p-4 bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
              <code className="text-sm text-dark-200 font-mono">{output}</code>
            </pre>
          </div>
        )}
      </div>
    </UtilityLayout>
  );
}
