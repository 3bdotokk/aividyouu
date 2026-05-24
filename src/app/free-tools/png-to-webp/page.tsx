import { Metadata } from "next";
import PngToWebpClient from "./PngToWebpClient";

export const metadata: Metadata = {
  title: "Free PNG to WEBP Converter - Smaller File Sizes",
  description: "Convert PNG images to WEBP format for smaller file sizes. Free online converter, no sign-up required.",
};

export default function PngToWebpPage() {
  return <PngToWebpClient />;
}
