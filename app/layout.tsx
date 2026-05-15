import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";

import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JM INNV",
  description: "Enterprise innovation solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-[#f4f8fb] text-[#111827]">
  <BackgroundEffects />

  <div className="relative z-10">
    {children}

    <Footer />
  </div>

  <FloatingTelegram />
</body>
    </html>
  );
}