import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="my-24 mx-6 lg:mx-10 max-w-6xl xl:mx-auto"
    >
      <div className="rounded-3xl bg-neutral-950 text-white px-8 py-14 md:px-16 md:py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 blur-3xl opacity-40" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 blur-3xl opacity-30" />
        <div className="relative max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-300 mb-4">
            The Weekly Dispatch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-4">
            Six essays a month. No filler. Straight to your inbox.
          </h2>
          <p className="text-neutral-300 text-lg leading-relaxed mb-8">
            Join 24,000 readers who get our latest writing on AI, software,
            design, and the future of work — every Friday morning.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 h-12 px-4 rounded-full bg-white/10 border border-white/20 placeholder:text-neutral-400 focus:outline-none focus:bg-white/15 focus:border-white/40 transition"
            />
            <button
              type="button"
              className="h-12 px-6 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition inline-flex items-center justify-center gap-2"
            >
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="text-xs text-neutral-400 mt-4">
            Unsubscribe anytime. We will never sell your email.
          </p>
        </div>
      </div>
    </section>
  );
}
