// app/api/videos/route.ts
import { fetchVimeoVideo } from "@/lib/vimeo";

export async function GET() {
  try {
    const videos = await fetchVimeoVideo();
    return Response.json({ videos });
  } catch (err) {
    console.error("Error fetching Vimeo videos:", err);
    return new Response("Failed to fetch videos", { status: 500 });
  }
}
