export type CTAContent = {
    message: string;
    buttonUrl?: string;
    buttonLabel?: string;
  };
  
  export type HeroContent = {
    headline: string;
    subhead: string;
    buttonText: string;
    buttonLink: string;
  };
  
  export type FeaturesContent = {
    features: {
      title: string;
      description: string;
      icon?: string;
    }[];
  };
  