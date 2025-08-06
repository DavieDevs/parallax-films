import { VimeoVideo } from "@/types/vimeo";

export async function fetchVimeoVideosByShowcase(showcaseId: string) {
  // const SHOWCASE_ID = "11813757";

  const response = await fetch(
    `https://api.vimeo.com/albums/${showcaseId}/videos?sort=manual`,
    {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Vimeo API Error:", errorText);
    throw new Error("Failed to fetch Vimeo video");
  }

  const data = await response.json();
  console.log(data);

  return data.data.map((video: VimeoVideo) => {
    const id = video.uri.split("/").pop();
    const sizes = video.pictures?.sizes || [];
    const highResThumbnail = sizes[sizes.length - 1]?.link;

    return {
      id,
      title: video.name,
      description: video.description,
      tags: video.tags.map((t) => t.tag),
      thumbnail: highResThumbnail,
      videoUrl: video.files?.[0]?.link,
    };
  });
}
