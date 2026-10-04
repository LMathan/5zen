import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "An array of URLs is required." },
        { status: 400 }
      );
    }

    const host = "5zentech.com";
    const key = "5zentechkey2026indexnow8899aabb";
    const keyLocation = `https://${host}/5zentechkey2026indexnow8899aabb.txt`;

    const payload = {
      host,
      key,
      keyLocation,
      urlList: urls,
    };

    const indexNowRes = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (indexNowRes.ok || indexNowRes.status === 202) {
      return NextResponse.json({
        success: true,
        message: `Submitted ${urls.length} URL(s) to IndexNow successfully.`,
      });
    } else {
      const errorText = await indexNowRes.text();
      return NextResponse.json(
        { error: `IndexNow submission failed: ${errorText}` },
        { status: indexNowRes.status }
      );
    }
  } catch (error: unknown) {
    console.error("IndexNow submission error:", error);
    return NextResponse.json(
      { error: "Internal server error submitting to IndexNow." },
      { status: 500 }
    );
  }
}
