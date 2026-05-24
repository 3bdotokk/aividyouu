import { Metadata } from "next";
import FreeToolsClient from "./FreeToolsClient";

export const metadata: Metadata = {
  title: "Free Online Tools - Browser-Based Utilities | No Sign-Up",
  description: "Free online tools that work directly in your browser. Image converters, QR generators, text counters, and more. No downloads, no sign-ups required.",
  openGraph: {
    title: "Free Online Tools - Browser-Based Utilities",
    description: "Free online tools that work directly in your browser. No downloads, no sign-ups required.",
  },
};

export default function FreeToolsPage() {
  return <FreeToolsClient />;
}
