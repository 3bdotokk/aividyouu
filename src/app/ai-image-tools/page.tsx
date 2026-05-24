import { Metadata } from "next";
import ToolsPageClient from "./ToolsPageClient";

export const metadata: Metadata = {
  title: "Best AI Image Tools 2025 - AI Image Generators & Editors",
  description: "Discover the best AI image generation tools. Create stunning artwork with Midjourney, Leonardo AI, Ideogram, and more AI image platforms.",
  openGraph: {
    title: "Best AI Image Tools 2025 - AI Image Generators & Editors",
    description: "Discover the best AI image generation tools. Create stunning artwork with AI-powered platforms.",
  },
};

export default function AIImageToolsPage() {
  return <ToolsPageClient />;
}
