import { CategoryInfo } from "@/types";

export const categories: CategoryInfo[] = [
  {
    id: "ai-video",
    name: "AI Video Tools",
    description: "Generate, edit, and enhance videos with AI-powered tools",
    icon: "🎬",
    slug: "ai-video-tools",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "ai-image",
    name: "AI Image Tools",
    description: "Create, edit, and transform images with artificial intelligence",
    icon: "🎨",
    slug: "ai-image-tools",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ai-productivity",
    name: "AI Productivity",
    description: "Boost your workflow with AI-powered productivity tools",
    icon: "⚡",
    slug: "ai-productivity-tools",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "ai-audio",
    name: "AI Audio Tools",
    description: "Generate music, clone voices, and edit audio with AI",
    icon: "🎵",
    slug: "ai-audio-tools",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: "ai-writing",
    name: "AI Writing Tools",
    description: "Write, edit, and enhance content with AI assistance",
    icon: "✍️",
    slug: "ai-writing-tools",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "free-utility",
    name: "Free Utilities",
    description: "Free browser-based tools for everyday tasks",
    icon: "🛠️",
    slug: "free-tools",
    color: "from-rose-500 to-pink-500",
  },
];

export const getCategoryBySlug = (slug: string): CategoryInfo | undefined => {
  return categories.find((cat) => cat.slug === slug);
};

export const getCategoryById = (id: string): CategoryInfo | undefined => {
  return categories.find((cat) => cat.id === id);
};
