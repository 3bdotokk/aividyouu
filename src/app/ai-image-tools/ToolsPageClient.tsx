"use client";

import ToolsPageLayout from "@/components/tools/ToolsPageLayout";
import { getToolsByCategory } from "@/data/tools";

export default function ToolsPageClient() {
  const tools = getToolsByCategory("ai-image");

  return (
    <ToolsPageLayout
      title="AI Image Tools"
      description="Create, edit, and transform images with the best AI-powered image generation and editing platforms available today."
      tools={tools}
      gradient="from-blue-500 to-cyan-500"
    />
  );
}
