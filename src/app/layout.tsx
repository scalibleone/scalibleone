import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScalibleOne - Build Your Product in 24 Hours",
  description: "Turn your concept into a live prototype instantly. No code, no big budget, just results.",
  keywords: ["AI prototype", "product development", "MVP", "no-code", "startup"],
  authors: [{ name: "ScalibleOne" }],
  openGraph: {
    title: "ScalibleOne - Build Your Product in 24 Hours",
    description: "Turn your concept into a live prototype instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}