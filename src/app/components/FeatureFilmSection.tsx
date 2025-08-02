"use client";

import { useEffect, useState } from "react";
import Button from "../components/Button";
import LABELS from "../constants/labels";
import { Video } from "@/types/video";

export default function FeatureFilmSection() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch("/api/videos");
        const { videos } = await res.json();
        setVideos(videos);
      } catch (error) {
        console.error("Error loading videos:", error);
      }
    };

    getVideos();
  }, []);

  return (
    <div className="bg-sand w-full flex flex-col justify-center items-center">
      <h2 className="text-mosswood font-bold p-6 text-4xl">
        {LABELS.featureFilm.title}
      </h2>

      <div className="flex flex-col ">
        {videos.map((video) => (
          <div
            key={video.id}
            className="p-4 rounded-lg my-2 md:flex w-full justify-between"
          >
            <div className="w-full">
              <iframe
                src={`https://player.vimeo.com/video/${video.id}`}
                width="100%"
                height="300"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded w-full"
              />
            </div>

            <div className="w-full flex flex-col h-72">
              <div className="p-2 space-y-1">
                <h2 className="text-lg md:text-2xl font-bold">{video.title}</h2>
                <p className="text-sm md:text-md lg:text-lg">
                  {video.description}
                </p>
              </div>

              <div className="md:mt-auto flex gap-2 flex-wrap p-2">
                {video.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-mosswood text-white px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <Button className="bg-mosswood ">View More</Button>
      </div>
    </div>
  );
}
