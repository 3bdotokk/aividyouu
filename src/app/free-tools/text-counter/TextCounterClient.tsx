"use client";

import { useState, useMemo } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";

export default function TextCounterClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter((s) => s.trim()).length : 0;
    const paragraphs = text.trim() ? text.split(/\n\n+/).filter((p) => p.trim()).length : 0;
    const readingTime = Math.ceil(words / 200);

    return { characters, charactersNoSpaces, words, sentences, paragraphs, readingTime };
  }, [text]);

  return (
    <UtilityLayout title="Text Counter" description="Count words, characters, sentences, and paragraphs in your text">
      <div className="space-y-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 resize-none min-h-[200px]"
          rows={8}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <StatCard label="Characters" value={stats.characters} />
          <StatCard label="No Spaces" value={stats.charactersNoSpaces} />
          <StatCard label="Words" value={stats.words} />
          <StatCard label="Sentences" value={stats.sentences} />
          <StatCard label="Paragraphs" value={stats.paragraphs} />
          <StatCard label="Read Time" value={`${stats.readingTime}m`} />
        </div>
      </div>
    </UtilityLayout>
  );
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
      <p className="text-xl font-bold text-white">{value}</p>
      <p className="text-xs text-dark-400 mt-1">{label}</p>
    </div>
  );
}
