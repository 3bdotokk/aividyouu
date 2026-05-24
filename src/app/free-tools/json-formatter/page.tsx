import { Metadata } from "next";
import JsonFormatterClient from "./JsonFormatterClient";

export const metadata: Metadata = {
  title: "Free JSON Formatter - Format & Validate JSON Online",
  description: "Format, validate, and beautify JSON data instantly. Free online JSON formatter, no sign-up required.",
};

export default function JsonFormatterPage() {
  return <JsonFormatterClient />;
}
