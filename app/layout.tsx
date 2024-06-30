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
    images: `https://utfs.io/f/6065a913-376e-43a3-a59d-519c358e737f-8pkbvt.png`
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Saas Kit",
    description: "A Next.js starter kit with Stack auth.",
    images: "https://utfs.io/f/6065a913-376e-43a3-a59d-519c358e737f-8pkbvt.png",
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
