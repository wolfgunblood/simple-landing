"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";

export const CopyToClipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    await navigator.clipboard.writeText(text);
    toast("Copied to clipboard", {
      icon: <CopyIcon className="h-4 w-4" />,
    });
  };
  return (
    <div className="flex justify-center items-center gap-3">
      <pre
        className="mt-2 max-w-full rounded-md bg-slate-950 py-2 px-4 dark:border-2 dark:rounded-md"
        style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
      >
        <code className="text-white">{text}</code>
      </pre>
      <Button size="sm" onClick={() => copyToClipboard()}>
        {copied ? (
          <CheckIcon
            className={cn(
              copied ? "opacity-100" : "opacity-0",
              "h-5 w-5 transition-opacity duration-500"
            )}
          />
        ) : (
          <CopyIcon className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};
