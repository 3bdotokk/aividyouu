"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import FileDropZone from "@/components/utilities/FileDropZone";
import { formatFileSize } from "@/lib/utils";

export default function ImageToPdfClient() {
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const [processing, setProcessing] = useState(false);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImages((prev) => [...prev, { file, preview: e.target?.result as string }]);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const convertToPdf = async () => {
    if (images.length === 0) return;
    setProcessing(true);

    try {
      const pdf = new jsPDF();

      for (let i = 0; i < images.length; i++) {
        if (i > 0) pdf.addPage();

        const img = new Image();
        img.src = images[i].preview;
        await new Promise((resolve) => { img.onload = resolve; });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgRatio = img.width / img.height;
        const pageRatio = pageWidth / pageHeight;

        let width: number, height: number;
        if (imgRatio > pageRatio) {
          width = pageWidth - 20;
          height = width / imgRatio;
        } else {
          height = pageHeight - 20;
          width = height * imgRatio;
        }

        const x = (pageWidth - width) / 2;
        const y = (pageHeight - height) / 2;

        pdf.addImage(images[i].preview, "JPEG", x, y, width, height);
      }

      pdf.save("converted-images.pdf");
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <UtilityLayout title="Image to PDF" description="Convert images to PDF documents instantly in your browser">
      <div className="space-y-6">
        <FileDropZone onFile={handleFile} label="Drop images here or click to upload (JPG, PNG, WEBP)" />

        {images.length > 0 && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {images.map((img, i) => (
                <div key={i} className="relative group rounded-lg overflow-hidden border border-white/10">
                  <img src={img.preview} alt={`Image ${i + 1}`} className="w-full aspect-square object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => removeImage(i)}
                      className="px-3 py-1 rounded-lg bg-red-500/80 text-white text-xs"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="absolute bottom-0 left-0 right-0 bg-black/70 text-xs text-dark-300 p-1 text-center truncate">
                    {formatFileSize(img.file.size)}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={convertToPdf}
                disabled={processing}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm disabled:opacity-50 hover:from-primary-500 hover:to-purple-500 transition-all"
              >
                {processing ? "Converting..." : `Convert ${images.length} image${images.length > 1 ? "s" : ""} to PDF`}
              </button>
              <button
                onClick={() => setImages([])}
                className="px-4 py-2 rounded-lg text-sm text-dark-400 hover:text-white transition-colors"
              >
                Clear All
              </button>
            </div>
          </>
        )}
      </div>
    </UtilityLayout>
  );
}
