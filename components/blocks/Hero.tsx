"use client";
import { HeroContent } from "@/lib/pageSchema";

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="bg-gray-100 py-20 px-6 text-center">
      <h1 className="text-4xl font-bold">{content.headline}</h1>
      {content.subheadline && (
        <p className="mt-4 text-lg text-gray-700">{content.subheadline}</p>
      )}
      {content.buttonText && (
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full">
          {content.buttonText}
        </button>
      )}
    </section>
  );
}
