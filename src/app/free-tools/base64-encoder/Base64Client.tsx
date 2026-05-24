"use client";

import { useState } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import { copyToClipboard } from "@/lib/utils";

export default function Base64Client() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const process = () => {
    setError("");
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
    } catch {
      setError("Invalid input for " + (mode === "encode" ? "encoding" : "decoding"));
      setOutput("");
    }
  };

  const handleCopy = async () => {
    await copyToClipboard(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <UtilityLayout title="Base64 Encoder/Decoder" description="Encode and decode Base64 strings instantly in your browser">
      <div className="space-y-6">
        <div className="flex gap-2">
          <button
            onClick={() => setMode("encode")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === "encode" ? "bg-primary-500/20 text-primary-400 border border-primary-500/30" : "bg-white/5 text-dark-400 border border-white/10"
            }`}
          >
            Encode
          </button>
          <button
            onClick={() => setMode("decode")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === "decode" ? "bg-primary-500/20 text-primary-400 border border-primary-500/30" : "bg-white/5 text-dark-400 border border-white/10"
            }`}
          >
            Decode
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-300 mb-2">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 string to decode..."}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 resize-none font-mono text-sm"
            rows={4}
          />
        </div>

        <button
          onClick={process}
          disabled={!input.trim()}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm disabled:opacity-50 hover:from-primary-500 hover:to-purple-500 transition-all"
        >
          {mode === "encode" ? "Encode" : "Decode"}
        </button>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-dark-300">Output</label>
              <button onClick={handleCopy} className="text-xs text-primary-400 hover:text-primary-300">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <code className="text-sm text-dark-200 font-mono break-all">{output}</code>
            </div>
          </div>
        )}
      </div>
    </UtilityLayout>
  );
}
