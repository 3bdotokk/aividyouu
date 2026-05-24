import { Metadata } from "next";
import JpgToPngClient from "./JpgToPngClient";

export const metadata: Metadata = {
  title: "Free JPG to PNG Converter - Convert Images Online",
  description: "Convert JPG images to PNG format with transparency support. Free online converter, no sign-up required.",
};

export default function JpgToPngPage() {
  return <JpgToPngClient />;
}
