import Link from "next/link";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[rgba(250,250,247,0.85)] border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-black flex items-center justify-center text-white font-serif text-lg leading-none">
            S
          </div>
          <span className="font-serif text-xl tracking-tight">
            Signal <span className="text-neutral-400">&amp;</span> Noise
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/#latest" className="hover:text-black transition">Articles</Link>
          <Link href="/#topics" className="hover:text-black transition">Topics</Link>
          <Link href="/about" className="hover:text-black transition">About</Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="hidden md:flex w-9 h-9 items-center justify-center rounded-full hover:bg-black/5 transition"
          >
            <Search className="w-4 h-4" />
          </button>
          <Link
            href="/#newsletter"
            className="hidden sm:inline-flex items-center h-9 px-4 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition"
          >
            Subscribe
          </Link>
          <button
            aria-label="Menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
