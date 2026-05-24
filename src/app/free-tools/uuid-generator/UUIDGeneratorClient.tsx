"use client";

import { useState } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import { copyToClipboard } from "@/lib/utils";

function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function UUIDGeneratorClient() {
  const [uuids, setUuids] = useState<string[]>([generateUUID()]);
  const [count, setCount] = useState(1);
  const [copied, setCopied] = useState<string | null>(null);

  const generate = () => {
    const newUuids = Array.from({ length: count }, () => generateUUID());
    setUuids(newUuids);
  };

  const handleCopy = async (uuid: string) => {
    await copyToClipboard(uuid);
    setCopied(uuid);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyAll = async () => {
    await copyToClipboard(uuids.join("\n"));
    setCopied("all");
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <UtilityLayout title="UUID Generator" description="Generate unique UUIDs (v4) for your applications and databases">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">Count</label>
            <input
              type="number"
              min={1}
              max={50}
              value={count}
              onChange={(e) => setCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
              className="w-24 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm"
            />
          </div>
          <div className="pt-6">
            <button
              onClick={generate}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all"
            >
              Generate
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {uuids.map((uuid, i) => (
            <div key={i} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10">
              <code className="flex-1 text-sm text-dark-200 font-mono">{uuid}</code>
              <button
                onClick={() => handleCopy(uuid)}
                className="px-3 py-1 rounded-md bg-white/10 text-xs text-dark-300 hover:text-white hover:bg-white/20 transition-all"
              >
                {copied === uuid ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>

        {uuids.length > 1 && (
          <button
            onClick={copyAll}
            className="px-5 py-2 rounded-lg bg-white/10 border border-white/10 text-sm text-white hover:bg-white/20 transition-all"
          >
            {copied === "all" ? "All Copied!" : "Copy All"}
          </button>
        )}
      </div>
    </UtilityLayout>
  );
}
