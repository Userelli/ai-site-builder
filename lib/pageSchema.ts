export type CTAContent = {
    message: string;
    buttonUrl?: string;
    buttonLabel?: string;
  };
  
  export type HeroContent = {
    headline: string;
    subheadline?: string; // <-- This fixes the build error
    buttonText?: string;
    buttonLink?: string;
  };
  
  export type FeaturesContent = {
    title?: string; // <-- Optional, since error mentioned it
    features: {
      title: string;
      description: string;
      icon?: string;
    }[];
  };
  