import { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog - AI Tools Guides, Tutorials & Insights",
  description: "Expert guides, tutorials, and insights about AI tools, video generation, image creation, and creative workflows.",
  openGraph: {
    title: "Blog - AI Tools Guides, Tutorials & Insights",
    description: "Expert guides, tutorials, and insights about AI tools and creative workflows.",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
