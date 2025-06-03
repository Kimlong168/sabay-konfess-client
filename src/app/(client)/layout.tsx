import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabay Konfess",
  description:
    "A safe space to express your deepest thoughts, secrets, and confessions. No judgment, no names, just pure honesty.",
  keywords: ["Confession", "Sabay Konfess"],
  authors: [{ name: "Kimlong Chann", url: "https://kimlongchann.dev" }],
  creator: "Kimlong Chann",
  publisher: "Kimlong Chann",
  openGraph: {
    title: "Sabay Konfess",
    description:
      "A safe space to express your deepest thoughts, secrets, and confessions. No judgment, no names, just pure honesty.",
    url: "https://sabaykonfess.kimlongchann.dev",
    siteName: "Sabay Konfess",
    type: "website",
    images: [
      {
        url: "https://sabaykonfess.kimlongchann.dev/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sabay Konfess",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimlong Chann - Full Stack Developer",
    description:
      "Hi there, I am Kimlong Chann, a full stack developer specializing in building modern web applications using React, Node.js, Laravel, and more.",
    images: ["https://sabaykonfess.kimlongchann.dev/images/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
