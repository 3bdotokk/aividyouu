import { Metadata } from "next";
import QRGeneratorClient from "./QRGeneratorClient";

export const metadata: Metadata = {
  title: "Free QR Code Generator - Create QR Codes Instantly",
  description: "Generate QR codes from any text or URL instantly in your browser. Free, no sign-up required.",
};

export default function QRGeneratorPage() {
  return <QRGeneratorClient />;
}
