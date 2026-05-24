import { Metadata } from "next";
import UUIDGeneratorClient from "./UUIDGeneratorClient";

export const metadata: Metadata = {
  title: "Free UUID Generator - Generate Unique IDs Instantly",
  description: "Generate UUIDs (v4) instantly in your browser. Copy to clipboard with one click. Free, no sign-up required.",
};

export default function UUIDGeneratorPage() {
  return <UUIDGeneratorClient />;
}
