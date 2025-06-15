"use client";

import { useState } from "react";
import JSZip from "jszip";

export default function BuilderPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [schema, setSchema] = useState<any>(null);

  const generateSite = async () => {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setSchema(data.schema);
    setLoading(false);
  };

  const exportToZip = (schema: any) => {
    const zip = new JSZip();

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${schema.pageName}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    ${schema.sections
      .map((section: any) => {
        if (section.type === "hero") {
          return `<section><h1>${section.content.headline}</h1><p>${section.content.subheadline}</p><button>${section.content.buttonText}</button></section>`;
        } else if (section.type === "features") {
          return `<section><h2>${section.content.title}</h2>${section.content.features
            .map(
              (f: any) =>
                `<div><strong>${f.icon}</strong> ${f.title}<br>${f.description}</div>`
            )
            .join("")}</section>`;
        } else if (section.type === "cta") {
          return `<section><p>${section.content.message}</p><a href="${section.content.buttonUrl}">${section.content.buttonLabel}</a></section>`;
        }
        return "";
      })
      .join("")}
  </main>
</body>
</html>
`;

    const css = `
body { font-family: sans-serif; padding: 40px; }
h1, h2 { margin-bottom: 8px; }
section { margin-bottom: 32px; }
button, a { padding: 8px 16px; background: black; color: white; border-radius: 8px; text-decoration: none; }
`;

    zip.file("index.html", html);
    zip.file("styles.css", css);

    zip.generateAsync({ type: "blob" }).then((content) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(content);
      a.download = "site.zip";
      a.click();
    });
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Site Builder</h1>
      <textarea
        className="w-full border p-2 mb-4"
        rows={4}
        placeholder="Describe your website..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={generateSite}
        className="px-6 py-2 bg-black text-white rounded"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Site"}
      </button>

      {schema && (
        <>
          <button
            onClick={() => exportToZip(schema)}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded"
          >
            Download as ZIP
          </button>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Rendered Preview:</h2>
            <div className="border rounded p-4">
              {schema.sections.map((section: any, index: number) => {
                switch (section.type) {
                  case "hero":
                    const Hero = require("@/components/blocks/Hero").default;
                    return (
                      <Hero key={index} content={section.content} />
                    );
                  case "features":
                    const Features =
                      require("@/components/blocks/Features").default;
                    return (
                      <Features key={index} content={section.content} />
                    );
                  case "cta":
                    const CTA = require("@/components/blocks/CTA").default;
                    return <CTA key={index} content={section.content} />;
                  default:
                    return null;
                }
              })}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-2">Generated Layout (JSON):</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {JSON.stringify(schema, null, 2)}
            </pre>
          </div>
        </>
      )}
    </main>
  );
}
