"use client";

import Hero from "@/components/blocks/Hero";
import Features from "@/components/blocks/Features";
import CTA from "@/components/blocks/CTA";
import { PageSchema } from "@/lib/pageSchema";

const pageData: PageSchema = {
  pageName: "Home",
  blocks: [
    {
      type: "hero",
      content: {
        headline: "AI Site Builder",
        subheadline: "Build your website instantly with AI.",
        buttonText: "Start Building",
        buttonLink: "/builder",
      },
    },
    {
      type: "features",
      content: {
        title: "Key Features",
        features: [
          {
            title: "Fast & Easy",
            description: "Generate complete websites in seconds.",
          },
          {
            title: "Fully Customizable",
            description: "Modify sections, styles, and content freely.",
          },
        ],
      },
    },
    {
      type: "cta",
      content: {
        message: "Ready to launch your site?",
        buttonLabel: "Try Now",
        buttonUrl: "/builder",
      },
    },
  ],
};

export default function PagePreview() {
  return (
    <main>
      {pageData.blocks.map((block, index) => {
        switch (block.type) {
          case "hero":
            return <Hero key={index} content={block.content} />;
          case "features":
            return <Features key={index} content={block.content} />;
          case "cta":
            return <CTA key={index} content={block.content} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
