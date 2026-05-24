import { Metadata } from "next";
import MarkdownClient from "./MarkdownClient";

export const metadata: Metadata = {
  title: "Free Markdown Previewer - Write & Preview Markdown",
  description: "Write and preview Markdown content in real-time. Free online Markdown editor and previewer.",
};

export default function MarkdownPreviewerPage() {
  return <MarkdownClient />;
}
