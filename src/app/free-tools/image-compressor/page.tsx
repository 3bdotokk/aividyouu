import { Metadata } from "next";
import ImageCompressorClient from "./ImageCompressorClient";

export const metadata: Metadata = {
  title: "Free Image Compressor - Reduce File Size Online",
  description: "Compress images without losing quality. Reduce file size for faster web loading. Free, no sign-up required.",
};

export default function ImageCompressorPage() {
  return <ImageCompressorClient />;
}
