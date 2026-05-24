export function CardSkeleton() {
  return (
    <div className="glass rounded-2xl p-5 animate-pulse">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-white/10" />
        <div className="flex-1">
          <div className="h-4 bg-white/10 rounded w-24 mb-1" />
          <div className="h-3 bg-white/10 rounded w-16" />
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-white/10 rounded w-full" />
        <div className="h-3 bg-white/10 rounded w-3/4" />
      </div>
      <div className="flex gap-2">
        <div className="h-5 bg-white/10 rounded w-16" />
        <div className="h-5 bg-white/10 rounded w-20" />
      </div>
    </div>
  );
}

export function BlogSkeleton() {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-video bg-white/10" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-3 bg-white/10 rounded w-full" />
        <div className="h-3 bg-white/10 rounded w-2/3" />
      </div>
    </div>
  );
}

export function UtilitySkeleton() {
  return (
    <div className="glass rounded-xl p-4 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white/10 rounded" />
        <div className="flex-1">
          <div className="h-4 bg-white/10 rounded w-24 mb-1" />
          <div className="h-3 bg-white/10 rounded w-32" />
        </div>
      </div>
    </div>
  );
}
