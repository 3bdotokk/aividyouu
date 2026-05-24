import { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import BlogArticleClient from "./BlogArticleClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: post.coverImage, width: 800, height: 400, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return notFound();

  return <BlogArticleClient post={post} />;
}
