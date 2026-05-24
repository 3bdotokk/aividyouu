"use client";

import { useCallback, useState } from "react";

interface FileDropZoneProps {
  onFile: (file: File) => void;
  accept?: string;
  label?: string;
}

export default function FileDropZone({ onFile, accept = "image/*", label = "Drop an image here or click to upload" }: FileDropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) onFile(file);
  }, [onFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFile(file);
  }, [onFile]);

  return (
    <label
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`block cursor-pointer border-2 border-dashed rounded-xl p-8 text-center transition-all ${
        isDragging
          ? "border-primary-500 bg-primary-500/10"
          : "border-white/10 hover:border-white/20 hover:bg-white/5"
      }`}
    >
      <input type="file" accept={accept} onChange={handleChange} className="hidden" />
      <svg className="w-10 h-10 mx-auto text-dark-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      <p className="text-sm text-dark-400">{label}</p>
      <p className="text-xs text-dark-500 mt-1">Drag & drop or click to browse</p>
    </label>
  );
}
