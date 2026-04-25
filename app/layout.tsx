import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal & Noise — A blog about technology, work, and the future",
  description:
    "Signal & Noise is a curated blog covering AI, software, design, and the changing shape of work in 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
