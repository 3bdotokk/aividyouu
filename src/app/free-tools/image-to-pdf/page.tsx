import { Metadata } from "next";
import ImageToPdfClient from "./ImageToPdfClient";

export const metadata: Metadata = {
  title: "Free Image to PDF Converter - Convert Images Instantly",
  description: "Convert images to PDF documents instantly in your browser. Supports JPG, PNG, WEBP. Free, no sign-up required.",
};

export default function ImageToPdfPage() {
  return <ImageToPdfClient />;
}
