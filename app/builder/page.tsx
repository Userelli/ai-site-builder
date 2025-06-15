"use client";

import React, { useState } from "react";
import Hero from "@/components/blocks/Hero";
import Features from "@/components/blocks/Features";
import CTA from "@/components/blocks/CTA";
import {
  PageSchema,
  CTAContent,
  HeroContent,
  FeaturesContent,
} from "@/lib/pageSchema";

const initialSchema: PageSchema = {
  pageName: "Untitled",
  blocks: [],
};

export default function BuilderPage() {
  const [pageData, setPageData] = useState<PageSchema>(initialSchema);

  const generateSamplePage = () => {
    setPageData({
      pageName: "Generated Page",
      blocks: [
        {
          type: "hero",
          content: {
            headline: "AI Website Builder",
            subheadline: "Generate full HTML websites instantly",
            buttonText: "Get Started",
            buttonLink: "/builder",
          },
        },
        {
          type: "features",
          content: {
            title: "Features",
            features: [
              { title: "No Code", description: "Just prompts, no coding" },
              { title: "Export Ready", description: "HTML/CSS ready to go" },
              { title: "Free Tier", description: "Try it for free" },
            ],
          },
        },
        {
          type: "cta",
          content: {
            message: "Want to launch now?",
            buttonLabel: "Export Site",
            buttonUrl: "/export",
          },
        },
      ],
    });
  };

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Builder</h1>
      <button
        onClick={generateSamplePage}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Sample Page
      </button>

      <div className="mt-6">
        {pageData.blocks.map((block, index) => {
          switch (block.type) {
            case "hero":
              return (
                <Hero
                  key={index}
                  content={block.content as HeroContent}
                />
              );
            case "features":
              return (
                <Features
                  key={index}
                  content={block.content as FeaturesContent}
                />
              );
            case "cta":
              return (
                <CTA
                  key={index}
                  content={block.content as CTAContent}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </main>
  );
}
