import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScalibleOne - Build Fast. Scale Smart.",
  description: "Turn your concept into a live prototype instantly. No code, no big budget, just results.",
  keywords: ["AI prototype", "product development", "MVP", "no-code", "startup", "AI tools","Artificial Intelligence","ScalibleOne"],
  authors: [{ name: "ScalibleOne" }],
  openGraph: {
    title: "ScalibleOne - Build Fast. Scale Smart.",
    description: "Turn your concept into a live prototype instantly.",
    type: "website",
    url: "https://scalibleone.com",
    images: [
      {
        url: "https://scalibleone.com/logo.png", // <-- from /public/logo.png
        width: 512,
        height: 512,
        alt: "ScalibleOne Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico", // <-- from /public/favicon.ico
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  metadataBase: new URL("https://scalibleone.com"),
  other: {
    "theme-color": "#0B0F14",
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