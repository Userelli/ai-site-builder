"use client";
import { CTAContent } from "@/lib/pageSchema";

export default function CTA({ content }: { content: CTAContent }) {
  return (
    <section className="bg-blue-600 text-white py-12 px-6 text-center">
      <p className="text-2xl font-semibold">{content.message}</p>
      <a
        href={content.buttonUrl || "#"}
        className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 font-bold rounded-full"
      >
        {content.buttonLabel}
      </a>
    </section>
  );
}
