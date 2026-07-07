import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
});

const MODEL = "black-forest-labs/flux-schnell";

interface ApiErrorResponse {
  error: string;
  status: number;
}

function toImageUrl(output: unknown) {
  const firstOutput = Array.isArray(output) ? output[0] : output;

  if (
    firstOutput &&
    typeof firstOutput === "object" &&
    "url" in firstOutput &&
    typeof firstOutput.url === "function"
  ) {
    return firstOutput.url().toString();
  }

  return String(firstOutput);
}

function getErrorStatus(error: unknown) {
  if (error && typeof error === "object" && "response" in error) {
    const response = error.response;

    if (
      response &&
      typeof response === "object" &&
      "status" in response &&
      typeof response.status === "number"
    ) {
      return response.status;
    }
  }

  return undefined;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

function getGenerateErrorResponse(error: unknown): ApiErrorResponse {
  const status = getErrorStatus(error);
  const message = getErrorMessage(error);

  if (!process.env.REPLICATE_API_TOKEN) {
    return {
      error: "Server is missing the Replicate API token.",
      status: 500
    };
  }

  if (status === 401 || status === 403) {
    return {
      error: "Replicate API token is invalid or does not have access.",
      status: 500
    };
  }

  if (status === 402 || message.toLowerCase().includes("insufficient credit")) {
    return {
      error: "Replicate account has insufficient credit. Please add billing credit and try again.",
      status: 402
    };
  }

  if (status === 429) {
    return {
      error: "Replicate rate limit reached. Please wait a moment and try again.",
      status: 429
    };
  }

  if (message.toLowerCase().includes("fetch failed")) {
    return {
      error: "Could not connect to Replicate. Please check the server network connection.",
      status: 502
    };
  }

  return {
    error: "Image generation failed. Please try a different prompt or try again later.",
    status: 500
  };
}

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

    const imageUrl = toImageUrl(output);

    console.log("✅ 图片生成成功:", imageUrl);

    return NextResponse.json({ imageUrl });
  } catch (error) {
    const errorResponse = getGenerateErrorResponse(error);

    console.error("❌ 图片生成失败:", {
      status: errorResponse.status,
      message: getErrorMessage(error)
    });

    return NextResponse.json(
      { error: errorResponse.error },
      { status: errorResponse.status }
    );
  }
}
