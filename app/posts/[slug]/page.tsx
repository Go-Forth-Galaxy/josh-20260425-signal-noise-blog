import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === slug);
  const next = posts[(idx + 1) % posts.length];

  return (
    <>
      <Navbar />

      {/* Article header */}
      <article className="max-w-3xl mx-auto px-6 lg:px-10 pt-12 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-black mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>

        <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
          {post.category}
        </div>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight mb-5">
          {post.title}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 leading-snug font-serif italic mb-8">
          {post.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-600 border-y border-black/10 py-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-full ${post.accent} text-white flex items-center justify-center font-medium`}
            >
              {post.author
                .split(" ")
                .map((s) => s[0])
                .join("")}
            </div>
            <div>
              <div className="font-medium text-black">{post.author}</div>
              <div className="text-xs text-neutral-500">{post.authorRole}</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> {post.readTime}
          </span>
        </div>
      </article>

      {/* Cover */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 mb-12">
        <div
          className={`relative aspect-[21/9] rounded-3xl overflow-hidden bg-gradient-to-br ${post.gradient}`}
        >
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_30%_30%,white,transparent_55%)]" />
        </div>
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-6 lg:px-10 prose-article">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Author bio */}
      <div className="max-w-2xl mx-auto px-6 lg:px-10 mt-16">
        <div className="flex items-center gap-4 p-6 bg-neutral-100 rounded-2xl">
          <div
            className={`w-14 h-14 rounded-full ${post.accent} text-white flex items-center justify-center text-xl font-medium shrink-0`}
          >
            {post.author
              .split(" ")
              .map((s) => s[0])
              .join("")}
          </div>
          <div>
            <div className="font-medium">{post.author}</div>
            <div className="text-sm text-neutral-600">
              {post.authorRole} at Signal &amp; Noise. Writing about{" "}
              {post.category.toLowerCase()} and adjacent obsessions.
            </div>
          </div>
        </div>
      </div>

      {/* Next */}
      <section className="max-w-3xl mx-auto px-6 lg:px-10 mt-20">
        <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
          Read next
        </div>
        <Link
          href={`/posts/${next.slug}`}
          className="group flex items-center justify-between gap-6 p-6 border border-black/10 rounded-2xl hover:border-black/30 transition"
        >
          <div>
            <div className="text-xs text-neutral-500 mb-1">{next.category}</div>
            <div className="font-serif text-2xl leading-tight tracking-tight">
              {next.title}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition" />
        </Link>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}
