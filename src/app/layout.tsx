import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://insightboard.vercel.app"),
  title: {
    default: "InsightBoard | Business Analytics Dashboard",
    template: "%s | InsightBoard",
  },
  description:
    "Modern analytics dashboard built with Next.js, React, TypeScript and Tailwind CSS.",
  keywords: [
    "Dashboard",
    "Analytics",
    "Business",
    "Admin",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "William Santana",
    },
  ],
  creator: "William Santana",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "InsightBoard",
    description: "Modern Business Analytics Dashboard.",
    // url: "https://insightboard.vercel.app",
    siteName: "InsightBoard",
    locale: "en_US",
    type: "website",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "InsightBoard Dashboard",
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    // icon: "/favicon.ico",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
