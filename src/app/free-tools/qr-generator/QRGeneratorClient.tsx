"use client";

import { useState, useRef } from "react";
import QRCode from "qrcode";
import UtilityLayout from "@/components/utilities/UtilityLayout";

export default function QRGeneratorClient() {
  const [text, setText] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = async () => {
    if (!text.trim()) return;
    try {
      const url = await QRCode.toDataURL(text, {
        width: 300,
        margin: 2,
        color: { dark: "#ffffff", light: "#00000000" },
      });
      setQrDataUrl(url);
    } catch (err) {
      console.error(err);
    }
  };

  const downloadQR = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = qrDataUrl;
    link.click();
  };

  return (
    <UtilityLayout title="QR Code Generator" description="Generate QR codes from any text or URL instantly">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-dark-300 mb-2">Enter text or URL</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="https://example.com or any text..."
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 resize-none"
            rows={3}
          />
        </div>

        <button
          onClick={generateQR}
          disabled={!text.trim()}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:from-primary-500 hover:to-purple-500 transition-all"
        >
          Generate QR Code
        </button>

        {qrDataUrl && (
          <div className="flex flex-col items-center gap-4 pt-4 border-t border-white/10">
            <div className="bg-white/10 p-4 rounded-xl">
              <img src={qrDataUrl} alt="QR Code" className="w-64 h-64" />
            </div>
            <button
              onClick={downloadQR}
              className="px-5 py-2 rounded-lg bg-white/10 border border-white/10 text-sm text-white hover:bg-white/20 transition-all"
            >
              Download PNG
            </button>
          </div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </UtilityLayout>
  );
}
