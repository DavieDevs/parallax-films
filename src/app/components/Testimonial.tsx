"use client";

import { useState } from "react";
import LABELS from "../constants/labels";
import Film from "./Film";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  title: string;
  videoID: string;
  review: string;
  name: string;
};

export default function Testimonial() {
  const testimonialEntries = Object.entries(LABELS.testimonial).filter(
    ([key, value]) => key !== "title" && typeof value === "object"
  ) as [string, Testimonial][];

  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const maxIndex = testimonialEntries.length - 1;

  const next = () => {
    setIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    setExpanded(false);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
    setExpanded(false);
  };

  const [, currentTestimonial] = testimonialEntries[index];

  const WORD_LIMIT = 40;
  const words = currentTestimonial.review.split(" ");
  const shouldTruncate = words.length > WORD_LIMIT;
  const truncatedText = words.slice(0, WORD_LIMIT).join(" ") + "...";

  return (
    <div className="bg-sand w-full flex flex-col items-center py-8">
      <h2 className="text-mosswood font-bold text-3xl mb-8">
        {LABELS.testimonial.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <Film videoId={currentTestimonial.videoID} />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">
            {currentTestimonial.title}
          </h3>

          <p className="text-gray-700 mb-2">
            {expanded || !shouldTruncate
              ? currentTestimonial.review
              : truncatedText}
          </p>

          {shouldTruncate && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-mosswood underline mb-4"
            >
              {expanded ? "View Less" : "View More"}
            </button>
          )}

          <p className="text-gray-500 mb-6 text-right w-full">
            - {currentTestimonial.name}
          </p>

          <div className="flex gap-4 justify-center items-center">
            <button
              onClick={prev}
              aria-label={LABELS.testimonial.previousTestimonial}
            >
              <ChevronLeft className="w-6 h-6 text-mosswood" />
            </button>
            <button
              onClick={next}
              aria-label={LABELS.testimonial.nextTestimonial}
            >
              <ChevronRight className="w-6 h-6 text-mosswood" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
