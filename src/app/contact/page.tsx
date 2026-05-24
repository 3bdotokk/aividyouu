import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Aividyou",
  description: "Contact the Aividyou team. Submit tool suggestions, partnership inquiries, or general questions.",
};

export default function ContactPage() {
  return <ContactClient />;
}
