import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
});

const MODEL = "black-forest-labs/flux-schnell";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    console.log("🎨 开始生成图片，prompt:", prompt);

    const output = await replicate.run(MODEL, {
      input: {
        prompt,
        num_outputs: 1,
        aspect_ratio: "1:1",
        output_format: "webp",
        output_quality: 80
      }
    });

    const imageUrl = Array.isArray(output) ? output[0] : output;

    console.log("✅ 图片生成成功:", imageUrl);

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("❌ 图片生成失败:", error);
    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 }
    );
  }
}
