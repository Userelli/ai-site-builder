import Hero from "@/components/blocks/Hero";
import Features from "@/components/blocks/Features";
import CTA from "@/components/blocks/CTA";
import { PageSchema } from "@/lib/pageSchema";

const pageData: PageSchema = {
  pageName: "Home",
  sections: [
    {
      type: "hero",
      content: {
        headline: "Grow Your Business with AI",
        subheadline: "Launch beautiful websites instantly",
        buttonText: "Get Started",
      },
    },
    {
      type: "features",
      content: {
        title: "Why Choose Us?",
        features: [
          { icon: "⚡", title: "Fast", description: "Instant site generation" },
          { icon: "🎨", title: "Beautiful", description: "Clean modern design" },
          { icon: "🔧", title: "Customizable", description: "Built with flexibility in mind" },
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
    <main className="min-h-screen">
      {pageData.sections.map((section, index) => {
        switch (section.type) {
          case "hero":
            return <Hero key={index} content={section.content} />;
          case "features":
            return <Features key={index} content={section.content} />;
          case "cta":
            return <CTA key={index} content={section.content} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
