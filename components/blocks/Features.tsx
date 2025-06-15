"use client";
import { FeaturesContent } from "@/lib/pageSchema";

export default function Features({ content }: { content: FeaturesContent }) {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">{content.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.features.map((f, i) => (
          <div key={i} className="p-4 border rounded-lg shadow-sm">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
