"use client";

import { useState } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import { copyToClipboard } from "@/lib/utils";

export default function MetaTagClient() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const generateTags = (): string => {
    let tags = "";
    if (title) tags += `<title>${title}</title>\n`;
    if (description) tags += `<meta name="description" content="${description}" />\n`;
    if (keywords) tags += `<meta name="keywords" content="${keywords}" />\n`;
    if (author) tags += `<meta name="author" content="${author}" />\n`;
    tags += `<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n`;
    if (title) {
      tags += `\n<!-- Open Graph -->\n`;
      tags += `<meta property="og:title" content="${title}" />\n`;
      if (description) tags += `<meta property="og:description" content="${description}" />\n`;
      tags += `<meta property="og:type" content="website" />\n`;
      if (url) tags += `<meta property="og:url" content="${url}" />\n`;
    }
    if (title) {
      tags += `\n<!-- Twitter Card -->\n`;
      tags += `<meta name="twitter:card" content="summary_large_image" />\n`;
      tags += `<meta name="twitter:title" content="${title}" />\n`;
      if (description) tags += `<meta name="twitter:description" content="${description}" />\n`;
    }
    return tags;
  };

  const output = generateTags();

  const handleCopy = async () => {
    await copyToClipboard(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <UtilityLayout title="Meta Tag Generator" description="Generate SEO-optimized meta tags for your web pages">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Page Title" value={title} onChange={setTitle} placeholder="My Awesome Website" />
          <InputField label="URL" value={url} onChange={setUrl} placeholder="https://example.com" />
          <div className="sm:col-span-2">
            <InputField label="Description" value={description} onChange={setDescription} placeholder="A brief description of your page (150-160 chars)" />
          </div>
          <InputField label="Keywords" value={keywords} onChange={setKeywords} placeholder="keyword1, keyword2, keyword3" />
          <InputField label="Author" value={author} onChange={setAuthor} placeholder="Your Name" />
        </div>

        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-dark-300">Generated Meta Tags</label>
              <button onClick={handleCopy} className="text-xs text-primary-400 hover:text-primary-300">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="p-4 bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
              <code className="text-sm text-dark-200 font-mono">{output}</code>
            </pre>
          </div>
        )}
      </div>
    </UtilityLayout>
  );
}

function InputField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-dark-300 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm"
      />
    </div>
  );
}
