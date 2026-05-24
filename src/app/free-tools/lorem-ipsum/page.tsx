import { Metadata } from "next";
import LoremIpsumClient from "./LoremIpsumClient";

export const metadata: Metadata = {
  title: "Free Lorem Ipsum Generator - Placeholder Text",
  description: "Generate placeholder text for your designs and layouts. Free Lorem Ipsum generator with customizable options.",
};

export default function LoremIpsumPage() {
  return <LoremIpsumClient />;
}
