import { Metadata } from "next";
import Base64Client from "./Base64Client";

export const metadata: Metadata = {
  title: "Free Base64 Encoder/Decoder - Encode & Decode Instantly",
  description: "Encode and decode Base64 strings instantly in your browser. Free online Base64 tool, no sign-up required.",
};

export default function Base64Page() {
  return <Base64Client />;
}
