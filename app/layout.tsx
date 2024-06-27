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
  description: "A Next.js starter kit with Lucia auth.",
  openGraph: {
    title:  "Next.js Saas Kit",
    description: "A Next.js starter kit with Lucia auth.",
    url: "https://saaskit.one/",
    siteName: `Saaskit`,
    locale: "en_US",
    type: "website",
    images: `https://utfs.io/f/25360b9b-32eb-46ba-ab3c-9d7e0247b11a-s7qyb6.png`
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
