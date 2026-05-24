"use client";

import ToolsPageLayout from "@/components/tools/ToolsPageLayout";
import { getToolsByCategory } from "@/data/tools";

export default function ToolsPageClient() {
  const tools = getToolsByCategory("ai-video");

  return (
    <ToolsPageLayout
      title="AI Video Tools"
      description="Generate, edit, and enhance videos with the most powerful AI video tools available. From text-to-video to professional editing."
      tools={tools}
      gradient="from-purple-500 to-pink-500"
    />
  );
}
