import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
          About
        </div>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight tracking-tight mb-6">
          A slow blog for the open web.
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed mb-6">
          Signal &amp; Noise was started in 2024 by a small group of writers
          and engineers who were tired of the fast lane. We publish six essays
          a month — long, thoughtful, and edited the old-fashioned way.
        </p>
        <div className="prose-article">
          <p>
            We cover technology, work, and the changing shape of the open
            web. We are not interested in launches, funding rounds, or
            scoreboards. We are interested in the underlying ideas and the
            people building things in unfashionable corners of the industry.
          </p>
          <p>
            Every essay we publish is written by a human, edited by a human,
            and read by at least two more humans before it goes live. We use
            AI for spelling and grammar suggestions, the same way our writers
            in 2010 used spellcheck. We do not use it to generate ideas,
            sentences, or arguments.
          </p>
          <p>
            If you want to write for us, send a draft and a short note about
            yourself to{" "}
            <span className="underline">pitches@signalnoise.blog</span>. We
            reply to everything within two weeks.
          </p>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}
