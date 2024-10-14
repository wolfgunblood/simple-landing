import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js SaaS Kit",
  description: "A Next.js starter kit",
  openGraph: {
    title: "Next.js SaaS Kit",
    description: "A Next.js starter kit",
    url: "https://saaskit.one/",
    siteName: "Saaskit",
    locale: "en_US",
    type: "website",
    images: "https://utfs.io/f/6065a913-376e-43a3-a59d-519c358e737f-8pkbvt.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js SaaS Kit",
    description: "A Next.js starter kit",
    images: "https://utfs.io/f/6065a913-376e-43a3-a59d-519c358e737f-8pkbvt.png",
    site: "@jalajdu", // Replace with your actual Twitter handle
  },
  verification: {
    google: "FovT39406gX49JZT0NTBhbnrJAL9a497m1nMcjLPzSw",
  },
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StackProvider app={stackServerApp}>
            <StackTheme>

              {children}
            </StackTheme>
          </StackProvider>
          <Toaster />

        </ThemeProvider>
      </body>
    </html>
  );
}
