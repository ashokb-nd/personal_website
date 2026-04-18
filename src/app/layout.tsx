import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashok Batta | Portfolio",
  description: "Data Analyst & ML Engineer - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-200">
        <Navigation />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <footer className="py-6 text-center text-slate-500 text-sm border-t border-slate-800">
          <p>© {new Date().getFullYear()} Ashok Batta. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}