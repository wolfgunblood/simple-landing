import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Saas Kit",
  description: "A Next.js starter kit with Stack  auth.",
  openGraph: {
    title:  "Next.js Saas Kit",
    description: "A Next.js starter kit with Stack auth.",
    url: "https://saaskit.one/",
    siteName: `Saaskit`,
    locale: "en_US",
    type: "website",
    images: `https://utfs.io/f/25360b9b-32eb-46ba-ab3c-9d7e0247b11a-s7qyb6.png`
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Saas Kit",
    description: "A Next.js starter kit with Stack auth.",
    images: "https://utfs.io/f/25360b9b-32eb-46ba-ab3c-9d7e0247b11a-s7qyb6.png",
    site: "@jalajdu" // Replace with your actual Twitter handle
  }
};
export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />

      <body className={inter.className}><StackProvider app={stackServerApp}><StackTheme>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </StackTheme></StackProvider></body>
    </html>
  );
}
