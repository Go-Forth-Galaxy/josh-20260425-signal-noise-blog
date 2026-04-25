import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/posts/${post.slug}`} className="block">
        <div
          className={`relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br ${post.gradient} mb-5`}
        >
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
          <div className="absolute bottom-4 left-4">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-white/90 bg-black/30 backdrop-blur px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-neutral-400" />
        <span className="inline-flex items-center gap-1">
          <Clock className="w-3 h-3" /> {post.readTime}
        </span>
      </div>
      <Link href={`/posts/${post.slug}`}>
        <h3 className="font-serif text-2xl leading-tight tracking-tight mb-2 group-hover:text-neutral-700 transition">
          {post.title}
        </h3>
      </Link>
      <p className="text-neutral-600 leading-relaxed mb-4">{post.excerpt}</p>
      <div className="mt-auto flex items-center justify-between">
        <div className="text-sm">
          <div className="font-medium">{post.author}</div>
          <div className="text-neutral-500 text-xs">{post.authorRole}</div>
        </div>
        <Link
          href={`/posts/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-black group-hover:gap-2 transition-all"
        >
          Read <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
