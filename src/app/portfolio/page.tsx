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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (videos.length > 0) {
      setMainVideo(videos[0]);
    }
  }, [videos]);

  const allTags = Array.from(new Set(videos.flatMap((v) => v.tags))).sort();

  const filteredVideos = videos.filter((video) => {
    if (selectedTags.length === 0) return true;
    return video.tags.some((tag) => selectedTags.includes(tag));
  });

  const filteredTags = searchTerm
    ? allTags
        .filter((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((tag) => !selectedTags.includes(tag)) // don’t duplicate selected
    : [];

  const visibleVideos = filteredVideos
    .filter((video) => video.id !== mainVideo?.id)
    .slice(0, visibleCount);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setVisibleCount(6);
  };

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!mainVideo) return null;

  return (
    <div ref={topRef}>
      <Navigation absolute={false} logo="mosswood" />
      <div className="bg-lace">
        <h1 className="text-6xl text-center p-8 text-mosswood">Portfolio</h1>

        {/* --- Main Video --- */}
        <div className="flex flex-col md:flex-row gap-6 w-full pb-6 px-4">
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

          <div className="w-full md:w-1/2 flex flex-col justify-between p-6">
            <div>
              <h2 className="text-lg md:text-2xl font-bold mb-2 text-mosswood uppercase">
                {mainVideo.title}
              </h2>
              <p className="text-sm md:text-md lg:text-lg mb-4 text-mosswood">
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

        {/* --- Tag Search + Filter Buttons --- */}
        <div className="flex flex-col items-center px-4 mb-6">
          {/* Search input with X */}
          <div className="relative w-full max-w-md mb-4">
            <p className="text-sm text-gray-500 mt-1 text-center">
              Search or select tags to filter videos. Click a tag again to
              unselect.
            </p>
            <input
              type="text"
              placeholder="Search tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-mosswood rounded-md w-full pr-10 focus:outline-none focus:ring-2 focus:ring-mosswood"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-mosswood hover:text-mosswood/70 text-lg"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Always show selected tags.
      Only show search matches when typing. */}
          {(selectedTags.length > 0 || searchTerm) && (
            <div className="flex flex-wrap gap-3 justify-center">
              {/* Selected tags (always visible) */}
              {selectedTags.map((tag) => (
                <button
                  key={`selected-${tag}`}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className="px-4 py-1 rounded-full text-sm font-medium bg-mosswood text-white transition"
                  title="Click to remove"
                >
                  #{tag}
                </button>
              ))}

              {/* Search results (only when searchTerm) */}
              {searchTerm &&
                filteredTags.length > 0 &&
                filteredTags.map((tag) => (
                  <button
                    key={`result-${tag}`}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="px-4 py-1 rounded-full text-sm font-medium bg-white border text-mosswood border-mosswood transition"
                  >
                    #{tag}
                  </button>
                ))}

              {searchTerm &&
                filteredTags.length === 0 &&
                selectedTags.length === 0 && (
                  <p className="text-sm text-gray-500">No tags found.</p>
                )}
            </div>
          )}

          {/* Clear all selected tags */}
          {selectedTags.length > 0 && (
            <button
              type="button"
              onClick={() => setSelectedTags([])}
              className="text-sm text-mosswood underline mt-4"
            >
              Clear selected tags
            </button>
          )}
        </div>

        <div>
          <p className="text-center text-md text-gray-500 mb-4">
            Find a video you like? Click the thumbnail to watch!
          </p>
        </div>
        {/* --- Video Thumbnails --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-4">
          {visibleVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => {
                setMainVideo(video);
                topRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer hover:shadow-lg transition-shadow rounded border bg-white"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover rounded-t"
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

        {/* --- Load More / Less Buttons --- */}
        <div className="text-center pb-12">
          {visibleCount < filteredVideos.length - 1 ? (
            <button
              className="px-6 py-2 bg-mosswood text-white rounded hover:bg-mosswood/90 transition"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              View More
            </button>
          ) : filteredVideos.length > 6 ? (
            <button
              className="px-6 py-2 bg-mosswood text-white rounded hover:bg-mosswood/90 transition"
              onClick={() => setVisibleCount(6)}
            >
              View Less
            </button>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}
