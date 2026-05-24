import { Metadata } from "next";
import TextCounterClient from "./TextCounterClient";

export const metadata: Metadata = {
  title: "Free Text Counter - Count Words, Characters & Sentences",
  description: "Count words, characters, sentences, and paragraphs in your text instantly. Free online text counter tool.",
};

export default function TextCounterPage() {
  return <TextCounterClient />;
}
