import { Metadata } from "next";
import PasswordGeneratorClient from "./PasswordGeneratorClient";

export const metadata: Metadata = {
  title: "Free Password Generator - Create Strong Passwords",
  description: "Generate strong, secure passwords with customizable options. Free online password generator, no sign-up required.",
};

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorClient />;
}
