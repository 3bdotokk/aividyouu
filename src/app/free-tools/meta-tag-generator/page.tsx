import { Metadata } from "next";
import MetaTagClient from "./MetaTagClient";

export const metadata: Metadata = {
  title: "Free Meta Tag Generator - SEO Meta Tags Tool",
  description: "Generate SEO-optimized meta tags for your web pages. Free online meta tag generator with OpenGraph support.",
};

export default function MetaTagGeneratorPage() {
  return <MetaTagClient />;
}
