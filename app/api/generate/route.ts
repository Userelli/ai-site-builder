import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const systemPrompt = `
You are an AI that converts website requests into structured JSON. 
Use this format exactly:

{
  "pageName": "Home",
  "sections": [
    {
      "type": "hero",
      "content": {
        "headline": "...",
        "subheadline": "...",
        "buttonText": "..."
      }
    },
    {
      "type": "features",
      "content": {
        "title": "...",
        "features": [
          { "icon": "⚡", "title": "...", "description": "..." },
          ...
        ]
      }
    },
    {
      "type": "cta",
      "content": {
        "message": "...",
        "buttonLabel": "...",
        "buttonUrl": "#"
      }
    }
  ]
}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
  });

  const code = completion.choices[0].message?.content || "{}";
  const schema = JSON.parse(code);

  return NextResponse.json({ schema });
}
