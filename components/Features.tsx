import React from "react";

import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CopyToClipboard } from "./copy-to-clipboard";
import {
  Drizzle,
  LuciaAuth,
  NextjsLight,
  NextjsDark,
  ReactJs,
  ShadcnUi,
  TRPC,
  TailwindCss,
  StripeLogo,
  ReactEmail,
  StackAuth,
  LemonSqueezy
} from "./feature-icons";
import CardGrid from "./hover-card";

const features = [
  {
    name: "Next.js",
    description: "The React Framework for Production",
    logo: NextjsLight,
  },
  {
    name: "React.js",
    description: "Server and client components.",
    logo: ReactJs,
  },
  {
    name: "Authentication",
    description:
      "Stack Auth - OAuth Authenication.Credential authentication with password reset and email validation",
    logo: StackAuth,
  },
  // {
  //   name: "Database",
  //   description: "Drizzle with postgres database",
  //   logo: Drizzle,
  // },
  // {
  //   name: "TypeSafe Backend",
  //   description: "Preserve type safety from backend to frontend with tRPC",
  //   logo: TRPC,
  // },
  {
    name: "Subscription",
    description: "Subscription with Lemonsqueeezy",
    logo: LemonSqueezy,
  },
  {
    name: "Tailwindcss",
    description: "Simple and elegant UI components built with Tailwind CSS",
    logo: TailwindCss,
  },
  {
    name: "Shadcn UI",
    description: "A set of beautifully designed UI components for React",
    logo: ShadcnUi,
  },
  // {
  //   name: "React Email",
  //   description: "Write emails in React with ease.",
  //   logo: ReactEmail,
  // },
];

const Features = () => {
  return (
    <section id="features" className="container mx-auto py-24 sm:py-32 lg:max-w-screen-lg ">
      <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        <a id="features"></a> Features
      </h1>
      <p className="text-balance mb-10 text-center text-muted-foreground md:text-lg lg:text-xl">
        This starter template is a guide to help you get started with Next.js
        for large scale applications. Feel free to add or remove features to
        suit your needs.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, i) => (
          <CardGrid
            key={i}
            name={feature.name}
            description={feature.description}
            logo={<feature.logo className="h-12 w-12" />}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
