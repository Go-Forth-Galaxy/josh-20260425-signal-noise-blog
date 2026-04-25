import Link from "next/link";
import { Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-md bg-black flex items-center justify-center text-white font-serif text-lg leading-none">
              S
            </div>
            <span className="font-serif text-xl">Signal &amp; Noise</span>
          </div>
          <p className="text-neutral-600 max-w-md leading-relaxed">
            A curated blog about technology, work, and the future. Six new
            essays a month. No filler, no hot takes, no algorithmic chum.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-neutral-500">
            Sections
          </h4>
          <ul className="space-y-2 text-neutral-700 text-sm">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li><Link href="/#latest" className="hover:text-black">Latest</Link></li>
            <li><Link href="/#topics" className="hover:text-black">Topics</Link></li>
            <li><Link href="/about" className="hover:text-black">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-neutral-500">
            Follow
          </h4>
          <ul className="space-y-2 text-neutral-700 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@signalnoise.blog
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4" /> Weekly newsletter
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-center text-xs text-neutral-500">
        © 2026 Signal &amp; Noise. Made for the open web.
      </div>
    </footer>
  );
}
