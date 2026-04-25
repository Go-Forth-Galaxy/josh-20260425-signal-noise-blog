import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="max-w-2xl mx-auto px-6 py-32 text-center">
        <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
          404
        </div>
        <h1 className="font-serif text-5xl tracking-tight mb-4">
          We couldn&apos;t find that page.
        </h1>
        <p className="text-neutral-600 mb-8">
          The article may have moved, or the URL might be a typo.
        </p>
        <Link
          href="/"
          className="inline-flex items-center h-11 px-6 rounded-full bg-black text-white font-medium hover:bg-neutral-800 transition"
        >
          Back to home
        </Link>
      </section>
      <Footer />
    </>
  );
}
