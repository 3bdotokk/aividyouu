export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: ToolCategory;
  subcategory?: string;
  logo: string;
  url: string;
  pricing: "free" | "freemium" | "paid";
  loginRequired: boolean;
  rating: number;
  featured: boolean;
  trending: boolean;
  tags: string[];
  features?: string[];
}

export type ToolCategory =
  | "ai-video"
  | "ai-image"
  | "ai-productivity"
  | "ai-audio"
  | "ai-writing"
  | "free-utility";

export interface CategoryInfo {
  id: ToolCategory;
  name: string;
  description: string;
  icon: string;
  slug: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  coverImage: string;
  publishedAt: string;
  readingTime: number;
  category: string;
  tags: string[];
  featured: boolean;
}

export interface FreeUtility {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
