"use client";

interface AdPlaceholderProps {
  format?: "banner" | "sidebar" | "inline" | "rectangle";
  className?: string;
}

export default function AdPlaceholder({ format = "banner", className = "" }: AdPlaceholderProps) {
  const sizes = {
    banner: "h-[90px] w-full",
    sidebar: "h-[250px] w-full max-w-[300px]",
    inline: "h-[100px] w-full",
    rectangle: "h-[250px] w-full",
  };

  return (
    <div className={`ad-placeholder ${sizes[format]} ${className}`}>
      <div className="text-center">
        <p className="text-dark-500 text-xs uppercase tracking-wider">Advertisement</p>
        <p className="text-dark-600 text-xs mt-1">{format === "banner" ? "728×90" : format === "sidebar" ? "300×250" : format === "rectangle" ? "336×280" : "Responsive"}</p>
      </div>
    </div>
  );
}
