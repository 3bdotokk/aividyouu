import { Metadata } from "next";
import ToolsPageClient from "./ToolsPageClient";

export const metadata: Metadata = {
  title: "Best AI Productivity Tools 2025 - Boost Your Workflow",
  description: "Discover the best AI productivity tools. From AI assistants to design platforms, find tools that supercharge your workflow.",
  openGraph: {
    title: "Best AI Productivity Tools 2025 - Boost Your Workflow",
    description: "Discover the best AI productivity tools that supercharge your workflow.",
  },
};

export default function AIProductivityToolsPage() {
  return <ToolsPageClient />;
}
