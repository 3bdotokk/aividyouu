import { Metadata } from "next";
import ColorPaletteClient from "./ColorPaletteClient";

export const metadata: Metadata = {
  title: "Free Color Palette Generator - Create Beautiful Palettes",
  description: "Generate beautiful color palettes for your design projects. Free online color palette generator.",
};

export default function ColorPalettePage() {
  return <ColorPaletteClient />;
}
