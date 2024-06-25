import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGradient } from "./Shiny";

const Hero = () => {
  return (
    <section className="relative mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
      <AnimatedGradient />

      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Open Source Next.js Boilerplate{" "}
      </h1>

      <p className="mt-5 max-w-prose text-base  ">
      Save more than 50 Hours on your next SaaS project
      </p>

      <Link
        className={cn(
          buttonVariants({
            size: "default",
            className: "mt-5",
          }),
          "text-base"
        )}
        href={"/dashboard"}
      >
        Get Started
      </Link>
      {/* <div className=" absolute h-14 inset-x-0 top-0 left-0 z-30">
        <PopupList />
      </div> */}
        
    </section>
  );
};

export default Hero;
