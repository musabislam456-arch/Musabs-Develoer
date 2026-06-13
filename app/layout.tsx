import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Musab | AI-Powered Web Developer",
  description:
    "Musab is an AI-powered web developer crafting premium, high-performance websites and web applications with Next.js, React, and modern AI integrations.",
  keywords: [
    "Musab",
    "Web Developer",
    "AI Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Musab" }],
  openGraph: {
    title: "Musab | AI-Powered Web Developer",
    description:
      "Premium, high-performance websites and AI-integrated web applications built with Next.js and React.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-canvas text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
