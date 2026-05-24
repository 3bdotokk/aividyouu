import { Testimonial, FAQ } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Content Creator",
    avatar: "https://ui-avatars.com/api/?name=SC&background=6366f1&color=fff&size=64",
    content: "Aividyou helped me discover tools I never knew existed. I saved hours of research finding the perfect AI video generator for my YouTube channel.",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Graphic Designer",
    avatar: "https://ui-avatars.com/api/?name=MJ&background=ec4899&color=fff&size=64",
    content: "The free utilities section is incredible. Image compression and format conversion right in the browser - no downloads needed. This is my daily go-to.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    avatar: "https://ui-avatars.com/api/?name=ER&background=14b8a6&color=fff&size=64",
    content: "Our team uses Aividyou to stay on top of the latest AI tools. The categorization and reviews make it easy to find exactly what we need.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Park",
    role: "Indie Developer",
    avatar: "https://ui-avatars.com/api/?name=DP&background=f59e0b&color=fff&size=64",
    content: "The developer utilities like JSON formatter and UUID generator are tools I use every single day. Clean, fast, and always available.",
    rating: 4,
  },
];

export const faqs: FAQ[] = [
  {
    question: "What is Aividyou?",
    answer: "Aividyou is a comprehensive AI tools discovery platform that helps you find the best AI tools for video creation, image generation, productivity, and more. We also offer free browser-based utilities for everyday tasks.",
  },
  {
    question: "Are the free utilities really free?",
    answer: "Yes! All utilities in our Free Tools section work entirely in your browser with no sign-up, no downloads, and no hidden costs. Your data never leaves your device.",
  },
  {
    question: "How do you rate AI tools?",
    answer: "Our ratings are based on a combination of factors including ease of use, output quality, pricing value, feature set, and user feedback from the community.",
  },
  {
    question: "Do you earn commissions from tool recommendations?",
    answer: "Some links on our platform are affiliate links, which means we may earn a small commission if you sign up through our link. This never affects our ratings or recommendations.",
  },
  {
    question: "How often is the tool directory updated?",
    answer: "We continuously monitor the AI landscape and update our directory regularly. New tools are added as they launch, and existing entries are updated as features and pricing change.",
  },
  {
    question: "Can I suggest a tool to be listed?",
    answer: "Absolutely! Use our Contact page to suggest AI tools you think should be featured on Aividyou. We review all submissions and add tools that meet our quality standards.",
  },
];
