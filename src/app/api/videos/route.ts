// app/api/videos/route.ts
import { fetchVimeoVideosByShowcase } from "@/lib/vimeo";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const showcaseId = searchParams.get("showcaseId");

  if (!showcaseId) {
    return new Response("Missing showcaseId", { status: 400 });
  }
  try {
    const videos = await fetchVimeoVideosByShowcase(showcaseId);
    return Response.json({ videos });
  } catch (err) {
    console.error("Error fetching Vimeo videos:", err);
    return new Response("Failed to fetch videos", { status: 500 });
  }
}
