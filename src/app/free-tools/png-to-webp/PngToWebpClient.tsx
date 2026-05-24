"use client";

import { useState } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import FileDropZone from "@/components/utilities/FileDropZone";
import { downloadBlob, formatFileSize } from "@/lib/utils";

export default function PngToWebpClient() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [quality, setQuality] = useState(85);
  const [converted, setConverted] = useState(false);

  const handleFile = (file: File) => {
    setFileName(file.name.replace(/\.[^.]+$/, ".webp"));
    setFileSize(file.size);
    setConverted(false);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const convert = () => {
    if (!preview) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            downloadBlob(blob, fileName);
            setConverted(true);
          }
        },
        "image/webp",
        quality / 100
      );
    };
    img.src = preview;
  };

  return (
    <UtilityLayout title="PNG to WEBP Converter" description="Convert PNG images to modern WEBP format for smaller file sizes">
      <div className="space-y-6">
        <FileDropZone onFile={handleFile} accept="image/png" label="Drop a PNG image here" />

        {preview && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <img src={preview} alt="Preview" className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <p className="text-sm text-white font-medium">{fileName}</p>
                <p className="text-xs text-dark-400">Original: {formatFileSize(fileSize)}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">Quality: {quality}%</label>
              <input
                type="range"
                min={10}
                max={100}
                value={quality}
                onChange={(e) => setQuality(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <button
              onClick={convert}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all"
            >
              {converted ? "Downloaded!" : "Convert & Download WEBP"}
            </button>
          </div>
        )}
      </div>
    </UtilityLayout>
  );
}
