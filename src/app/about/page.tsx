import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Aividyou - Our Mission & Story",
  description: "Learn about Aividyou, our mission to help creators discover the best AI tools, and the team behind the platform.",
};

export default function AboutPage() {
  return <AboutClient />;
}
