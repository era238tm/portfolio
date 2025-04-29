import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ActiveSectionProvider } from "@/contexts/active-section-context";
import { ThemeProvider } from "@/contexts/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal Narwal - Portfolio",
  description: "Personal portfolio of Vishal Narwal showcasing projects, experience, and skills in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-neutral-900/97 text-neutral-950 dark:text-neutral-50 min-w-108`}
      >
        <ThemeProvider>
          <ActiveSectionProvider>
            {children}
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
