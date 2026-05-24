"use client";

import ToolsPageLayout from "@/components/tools/ToolsPageLayout";
import { getToolsByCategory } from "@/data/tools";

export default function ToolsPageClient() {
  const tools = getToolsByCategory("ai-productivity");

  return (
    <ToolsPageLayout
      title="AI Productivity Tools"
      description="Boost your workflow with AI-powered productivity tools. From writing assistants to design platforms and organizational tools."
      tools={tools}
      gradient="from-green-500 to-emerald-500"
    />
  );
}
