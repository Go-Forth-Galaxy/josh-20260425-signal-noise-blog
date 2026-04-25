import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/posts';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
        {/* Featured Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {post.topic}
            </span>
            <time className="text-xs text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>

          <h2 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
            {post.title}
          </h2>

          <p className="line-clamp-2 text-sm text-gray-600">
            {post.excerpt}
          </p>

          <div className="mt-4 text-sm font-semibold text-blue-700 transition-colors group-hover:text-blue-900">
            Read More →
          </div>
        </div>
      </article>
    </Link>
  );
}
