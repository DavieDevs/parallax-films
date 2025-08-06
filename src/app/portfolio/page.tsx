"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import { useVimeoVideos } from "@/hooks/useVimeoVideos";
import { Video } from "@/types/video";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

export default function Portfolio() {
  const topRef = useRef<HTMLDivElement>(null);
  const { videos, loading, error } = useVimeoVideos("11817346");
  const [mainVideo, setMainVideo] = useState<Video | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    if (videos.length > 0) {
      setMainVideo(videos[0]);
    }
  }, [videos]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!mainVideo) return null;

  return (
    <div ref={topRef}>
      <Navigation absolute={false} logo="mosswood" />
      <div className="bg-lace">
        <h1 className="text-6xl  text-center p-8 text-mosswood">Portfolio</h1>

        <div className="flex flex-col md:flex-row gap-6 w-full pb-6">
          <div className="w-full md:w-1/2">
            <iframe
              src={`https://player.vimeo.com/video/${mainVideo.id}`}
              width="100%"
              height="400"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded w-full"
            ></iframe>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between  p-6">
            <div>
              <h2 className="text-lg md:text-2xl font-bold mb-2 text-mosswood uppercase">
                {mainVideo.title}
              </h2>
              <p className="text-sm md:text-md lg:text-lg mb-4 text-mosswood ">
                {mainVideo.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {mainVideo.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-mosswood text-white px-2 py-1 rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {videos
            .filter((video) => video.id !== mainVideo.id)
            .slice(0, visibleCount)
            .map((video) => (
              <div
                key={video.id}
                onClick={() => setMainVideo(video)}
                className="cursor-pointer hover:shadow-lg transition-shadow rounded border bg-white"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover rounded-t"
                  onClick={() => {
                    setMainVideo(video);
                    topRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                />
                <div className="p-3">
                  <h3 className="text-md font-bold">{video.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-mosswood text-white px-2 py-1 rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center pb-12">
          {visibleCount < videos.length - 1 ? (
            <button
              className="px-6 py-2 bg-mosswood text-white rounded hover:bg-mosswood/90 transition"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              View More
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-mosswood text-white rounded hover:bg-mosswood/90 transition"
              onClick={() => setVisibleCount(6)}
            >
              View Less
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
