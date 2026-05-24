import { Metadata } from "next";
import ToolsPageClient from "./ToolsPageClient";

export const metadata: Metadata = {
  title: "Best AI Video Tools 2025 - AI Video Generators & Editors",
  description: "Discover the best AI video generation and editing tools. Create stunning videos with AI-powered platforms like Runway, Pika, Kling AI, and more.",
  openGraph: {
    title: "Best AI Video Tools 2025 - AI Video Generators & Editors",
    description: "Discover the best AI video generation and editing tools. Create stunning videos with AI-powered platforms.",
  },
};

export default function AIVideoToolsPage() {
  return <ToolsPageClient />;
}
