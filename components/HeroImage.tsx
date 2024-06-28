import React from "react";

const HeroImage = () => {
  return (
    <section id="" className="container py-24 sm:py-32 ">
      <div
        className="mx-auto max-w-3xl"
        data-aos="zoom-y-out"
        data-aos-delay={600}
      >
        <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
          <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
            <span className="text-[13px] font-medium text-white">
              saaskit.one
            </span>
          </div>
          <div className="font-mono text-gray-200 [&_span]:opacity-0">
            <span className="animate-[code-1_10s_infinite] ">
              git clone
            </span>
            {" "}
            <span className="animate-[code-2_10s_infinite] ">
            </span>
            <span
              className="animate-[code-2_10s_infinite] text-gray-500"
              style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
            >
             https://github.com/wolfgunblood/nextjs-saaskit
            </span>

            <br />
            <span className="animate-[code-3_10s_infinite]">
              cp .env.example .env
            </span>
            <br />
            <span className="animate-[code-4_10s_infinite]">
              cp .env.loc .env.local
            </span>
            <br />
            <br />
            <span className="animate-[code-5_10s_infinite] ">
              pnpm install
            </span>
            <br />
            <span className="animate-[code-6_10s_infinite]">
              npm run dev
            </span>
            <br />
            <span className="animate-[code-6_10s_infinite] text-gray-500">
              Start Shipping  🎉  🎉
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
