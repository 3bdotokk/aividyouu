import { Metadata } from "next";
import { tools, getToolBySlug } from "@/data/tools";
import ToolDetailClient from "./ToolDetailClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: `${tool.name} - AI Tool Review & Details`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - AI Tool Review & Details`,
      description: tool.description,
      images: [{ url: tool.logo, width: 128, height: 128, alt: tool.name }],
    },
  };
}

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return notFound();

  return <ToolDetailClient tool={tool} />;
}
