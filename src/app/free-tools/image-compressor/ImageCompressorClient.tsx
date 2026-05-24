"use client";

import { useState } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import FileDropZone from "@/components/utilities/FileDropZone";
import { downloadBlob, formatFileSize } from "@/lib/utils";

export default function ImageCompressorClient() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [quality, setQuality] = useState(70);
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);

  const handleFile = (file: File) => {
    setFileName(file.name);
    setOriginalSize(file.size);
    setCompressedBlob(null);
    setCompressedSize(0);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const compress = () => {
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
            setCompressedBlob(blob);
            setCompressedSize(blob.size);
          }
        },
        "image/jpeg",
        quality / 100
      );
    };
    img.src = preview;
  };

  const download = () => {
    if (compressedBlob) {
      downloadBlob(compressedBlob, `compressed-${fileName}`);
    }
  };

  const savings = originalSize > 0 ? Math.round((1 - compressedSize / originalSize) * 100) : 0;

  return (
    <UtilityLayout title="Image Compressor" description="Compress images without losing quality for faster web loading">
      <div className="space-y-6">
        <FileDropZone onFile={handleFile} label="Drop an image to compress (JPG, PNG, WEBP)" />

        {preview && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <img src={preview} alt="Preview" className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <p className="text-sm text-white font-medium">{fileName}</p>
                <p className="text-xs text-dark-400">Original: {formatFileSize(originalSize)}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Quality: {quality}%
              </label>
              <input
                type="range"
                min={10}
                max={95}
                value={quality}
                onChange={(e) => setQuality(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-dark-500 mt-1">
                <span>Smaller file</span>
                <span>Better quality</span>
              </div>
            </div>

            <button
              onClick={compress}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all"
            >
              Compress Image
            </button>

            {compressedSize > 0 && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-400 font-medium">Compressed successfully!</span>
                  <span className="text-sm text-green-400 font-bold">-{savings}%</span>
                </div>
                <p className="text-xs text-dark-400 mb-3">
                  {formatFileSize(originalSize)} → {formatFileSize(compressedSize)}
                </p>
                <button
                  onClick={download}
                  className="px-5 py-2 rounded-lg bg-green-500/20 text-sm text-green-400 hover:bg-green-500/30 transition-all"
                >
                  Download Compressed Image
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </UtilityLayout>
  );
}
