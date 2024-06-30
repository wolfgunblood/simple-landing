import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGradient } from "./Shiny";
import { CopyToClipboard } from "./copy-to-clipboard";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Hero = () => {
  const githubUrl = "https://github.com/wolfgunblood/nextjs-saaskit";
  return (
    <section className="relative mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
      <AnimatedGradient />

      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
      Open Source Next.js SaaS kit to build a
      scalable and production-ready SaaS
      </h1>

      <p className="mt-5 max-w-prose text-base  text-gray-400">
        A Next.js Authentication starter template (password reset, email
        validation and oAuth). Includes Auth, MongoDB, Lemon Squeezy,
        tailwindcss and shadcn-ui{" "}
      </p>

      <div className="my-10">
        <div className="mx-auto max-w-fit">
          <CopyToClipboard text={"npx nextjs-saaskit"} />
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <Button size="lg" variant="outline" asChild>
          <a href={githubUrl}>
            <GitHubLogoIcon className="mr-1 h-5 w-5" />
            GitHub
          </a>
        </Button>
        <Button size="lg" asChild>
          <Link href="https://demo.saaskit.one/">Demo</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
