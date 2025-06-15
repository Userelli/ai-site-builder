"use client";

import React from "react";
import Hero from "@/components/blocks/Hero";
import Features from "@/components/blocks/Features";
import CTA from "@/components/blocks/CTA";
import { PageSchema, CTAContent, HeroContent, FeaturesContent } from "@/lib/pageSchema";

const pageData: PageSchema = {
  pageName: "Home",
  blocks: [
    {
      type: "hero",
      content: {
        headline: "Build websites with AI",
        subheadline: "From idea to HTML in seconds",
        buttonText: "Try Now",
        buttonLink: "/builder",
      },
    },
    {
      type: "features",
      content: {
        title: "What you get",
        features: [
          {
            title: "Instant HTML",
            description: "No more manual coding. Get production-ready HTML instantly.",
          },
          {
            title: "SEO Optimized",
            description: "Clean code with best practices out of the box.",
          },
          {
            title: "Download & Export",
            description: "Export your HTML/CSS files easily.",
          },
        ],
      },
    },
    {
      type: "cta",
      content: {
        message: "Ready to launch your site?",
        buttonLabel: "Start Building",
        buttonUrl: "/builder",
      },
    },
  ],
};

const PreviewPage = () => {
  return (
    <div>
      {pageData.blocks.map((block, index) => {
        switch (block.type) {
          case "hero":
            return <Hero key={index} content={block.content as HeroContent} />;
          case "features":
            return <Features key={index} content={block.content as FeaturesContent} />;
          case "cta":
            return <CTA key={index} content={block.content as CTAContent} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PreviewPage;
