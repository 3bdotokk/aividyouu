"use client";

import { useState, useCallback } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import { copyToClipboard } from "@/lib/utils";

function randomHex(): string {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function generatePalette(): string[] {
  return Array.from({ length: 5 }, () => randomHex());
}

export default function ColorPaletteClient() {
  const [palette, setPalette] = useState<string[]>(generatePalette());
  const [copied, setCopied] = useState<string | null>(null);

  const regenerate = useCallback(() => {
    setPalette(generatePalette());
  }, []);

  const handleCopy = async (color: string) => {
    await copyToClipboard(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyAllCSS = async () => {
    const css = palette.map((c, i) => `--color-${i + 1}: ${c};`).join("\n");
    await copyToClipboard(css);
    setCopied("all");
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <UtilityLayout title="Color Palette Generator" description="Generate beautiful color palettes for your design projects">
      <div className="space-y-6">
        <div className="grid grid-cols-5 gap-2 h-48 rounded-xl overflow-hidden">
          {palette.map((color, i) => (
            <button
              key={i}
              onClick={() => handleCopy(color)}
              className="relative group transition-transform hover:scale-105"
              style={{ backgroundColor: color }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <span className="text-white text-xs font-mono font-bold">
                  {copied === color ? "Copied!" : color.toUpperCase()}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-2">
          {palette.map((color, i) => (
            <div key={i} className="text-center">
              <p className="text-xs font-mono text-dark-300">{color.toUpperCase()}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={regenerate}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all"
          >
            Generate New Palette
          </button>
          <button
            onClick={copyAllCSS}
            className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-sm text-white hover:bg-white/20 transition-all"
          >
            {copied === "all" ? "Copied!" : "Copy as CSS"}
          </button>
        </div>

        <p className="text-xs text-dark-500">Click any color to copy its hex value. Press Space or click Generate for a new palette.</p>
      </div>
    </UtilityLayout>
  );
}
