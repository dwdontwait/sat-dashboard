import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
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
  title: "SAT Prep Dashboard | Achievable - Track Your Progress",
  description: "Monitor your SAT preparation progress with detailed analytics, practice test scores, and personalized study plans. Industry-leading exam prep platform with 95%+ success rates.",
  keywords: "SAT prep, SAT practice tests, college entrance exams, test preparation, study dashboard, exam analytics, SAT scores",
  authors: [{ name: "Achievable" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "SAT Prep Dashboard | Achievable",
    description: "Track your SAT preparation progress with detailed analytics and personalized study plans",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAT Prep Dashboard | Achievable",
    description: "Track your SAT preparation progress with detailed analytics and personalized study plans",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
