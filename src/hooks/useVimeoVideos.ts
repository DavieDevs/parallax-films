import { useEffect, useState } from "react";
import { Video } from "@/types/video";

export function useVimeoVideos(showcaseId: string) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch(`/api/videos?showcaseId=${showcaseId}`);

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text);
        }

        const { videos } = await res.json();
        setVideos(videos);
      } catch (err: any) {
        setError(err.message || "Failed to load videos");
        console.error("Error loading videos:", err);
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, [showcaseId]);

  return { videos, loading, error };
}
