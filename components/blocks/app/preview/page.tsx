import Hero from "@/components/blocks/Hero";
import Features from "@/components/blocks/Features";
import CTA from "@/components/blocks/CTA";
import {
  PageSchema,
  HeroContent,
  FeaturesContent,
  CTAContent,
} from "@/lib/pageSchema";

const pageData: PageSchema = {
  pageName: "Home",
  blocks: [
    {
      type: "hero",
      content: {
        headline: "Grow Your Business with AI",
        subheadline: "Launch beautiful websites instantly",
        buttonText: "Get Started",
        buttonLink: "#",
      },
    },
    {
      type: "features",
      content: {
        title: "Why Choose Us?",
        features: [
          {
            icon: "⚡",
            title: "Fast",
            description: "Instant site generation from text.",
          },
          {
            icon: "🎨",
            title: "Beautiful",
            description: "Clean modern designs ready to publish.",
          },
          {
            icon: "🛠",
            title: "Customizable",
            description: "Built for flexibility and scalability.",
          },
        ],
      },
    },
    {
      type: "cta",
      content: {
        message: "Ready to create your AI-powered website?",
        buttonLabel: "Launch Now",
        buttonUrl: "#",
      },
    },
  ],
};

export default function PreviewPage() {
  return (
    <main>
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
    </main>
  );
}
