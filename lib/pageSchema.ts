export type CTAContent = {
  message: string;
  buttonUrl?: string;
  buttonLabel?: string;
};

export type HeroContent = {
  headline: string;
  subheadline?: string;
  buttonText: string;
  buttonLink: string;
};

export type FeaturesContent = {
  title: string;
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
};

// ✅ Final correct version
export type PageSchema = {
  pageName: string;
  blocks: {
    type: "hero" | "cta" | "features";
    content: HeroContent | CTAContent | FeaturesContent;
  }[];
};
