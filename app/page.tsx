import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import { posts } from "@/lib/posts";

const TOPICS = [
  { name: "Artificial Intelligence", count: 14, gradient: "from-indigo-500 to-violet-600" },
  { name: "Engineering", count: 22, gradient: "from-teal-500 to-emerald-600" },
  { name: "Design", count: 11, gradient: "from-rose-500 to-pink-600" },
  { name: "Infrastructure", count: 9, gradient: "from-sky-500 to-cyan-600" },
  { name: "Work", count: 17, gradient: "from-amber-500 to-orange-600" },
  { name: "Web", count: 13, gradient: "from-fuchsia-500 to-purple-600" },
];

export default function Home() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-6">
          <Sparkles className="w-4 h-4 text-violet-500" />
          Issue 27 — April 2026
        </div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
          Decoding the future, one essay at a time.
        </h1>
        <p className="mt-6 text-xl text-neutral-600 max-w-2xl leading-relaxed">
          Signal &amp; Noise is a slow blog about technology, work, and the
          changing shape of the open web. Six new essays a month. Read by
          24,000 builders, designers, and engineers.
        </p>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mb-20">
        <Link href={`/posts/${featured.slug}`} className="group block">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div
              className={`lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br ${featured.gradient}`}
            >
              <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_30%_30%,white,transparent_55%)]" />
              <div className="absolute top-5 left-5">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-white bg-black/40 backdrop-blur px-3 py-1 rounded-full">
                  Featured · {featured.category}
                </span>
              </div>
              <div className="absolute bottom-5 right-5 text-white/80 text-sm">
                {featured.readTime}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-4 group-hover:text-neutral-700 transition">
                {featured.title}
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <div className="font-medium">{featured.author}</div>
                  <div className="text-neutral-500 text-xs">{featured.authorRole}</div>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-black group-hover:gap-2 transition-all">
                  Read essay <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Latest grid */}
      <section id="latest" className="max-w-6xl mx-auto px-6 lg:px-10 mb-20">
        <div className="flex items-end justify-between mb-10 border-b border-black/10 pb-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
              Latest articles
            </h2>
            <p className="text-neutral-500 mt-1">
              Five new essays published this month.
            </p>
          </div>
          <span className="hidden md:inline text-sm text-neutral-500">
            {rest.length} articles
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Topics */}
      <section
        id="topics"
        className="max-w-6xl mx-auto px-6 lg:px-10 mb-20"
      >
        <div className="mb-10">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            Browse by topic
          </h2>
          <p className="text-neutral-500 mt-1">
            We cover six things deeply, and almost nothing else.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOPICS.map((t) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white px-6 py-7 hover:border-black/30 transition cursor-pointer"
            >
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br ${t.gradient} opacity-10 group-hover:opacity-20 transition`}
              />
              <div className="relative">
                <div className="font-serif text-2xl tracking-tight mb-1">
                  {t.name}
                </div>
                <div className="text-sm text-neutral-500">
                  {t.count} articles
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}
