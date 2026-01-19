import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import HexagonBackground from "@/components/HexagonBackground";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Metadata configuration for SEO
export const metadata: Metadata = {
  title: "ProMarshal - AI Executive Assistant For Project Owners",
  description:
    "Helps you plan, guide, and take decisions through every phase of the project",
  keywords: ["AI", "Project Management", "Executive Assistant"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${inter.variable} font-sans antialiased bg-black`}
      >
        <HexagonBackground />
        {children}
      </body>
    </html>
  );
}
