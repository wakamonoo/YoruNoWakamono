"use client";
import photo1 from "@/assets/imageShowcase/photo1.jpg";
import photo2 from "@/assets/imageShowcase/photo2.jpg";
import photo3 from "@/assets/imageShowcase/photo3.jpg";
import photo4 from "@/assets/imageShowcase/photo4.jpg";
import photo5 from "@/assets/imageShowcase/photo5.jpg";
import photo6 from "@/assets/imageShowcase/photo6.jpg";
import photo7 from "@/assets/imageShowcase/photo7.jpg";
import photo8 from "@/assets/imageShowcase/photo8.jpg";
import photo9 from "@/assets/imageShowcase/photo9.png";
import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    id: 1,
    image: photo1,
    caption: "Class of 2025",
    rotation: -10,
  },
  {
    id: 2,
    image: photo2,
    caption: "Milestone Worth Remembering",
    rotation: 10,
  },
  {
    id: 3,
    image: photo3,
    caption: "Graduation Photoshoot",
    rotation: -8,
  },
  {
    id: 4,
    image: photo4,
    caption: "One for the Memories",
    rotation: 8,
  },
  {
    id: 5,
    image: photo5,
    caption: "In School Uniform",
    rotation: -6,
  },
  {
    id: 6,
    image: photo6,
    caption: "Wacky!!",
    rotation: 6,
  },
  {
    id: 7,
    image: photo7,
    caption: "TOR LOOK",
    rotation: -4,
  },
  {
    id: 8,
    image: photo8,
    caption: "Internship at BytesCrafter",
    rotation: 4,
  },
  {
    id: 9,
    image: photo9,
    caption: "Intern of the Week",
    rotation: -2,
  },
];

export default function ImagesLightbox({ setShowImagesLightbox }) {
  const [cards, setCards] = useState(photos);

  function handleCardClick() {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }

  return (
    <div
      onClick={() => setShowImagesLightbox(false)}
      className="fixed inset-0 z-150 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative aspect-5/7 w-[min(90vw,57.14vh)]"
      >
        {cards.map((photo, index) => {
          const isFront = index === 0;

          return (
            <button
              key={photo.id}
              type="button"
              onClick={handleCardClick}
              aria-label={`View photoL ${photo.caption}`}
              className="absolute inset-0 cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-all duration-200 ease-in-out"
              style={{
                zIndex: cards.length - index,
                transform: `translate(${index * 5}px, ${index * 3}px) rotate(${
                  isFront ? 0 : photo.rotation
                }deg) scale(${1 - index * 0.025})`,
                pointerEvents: isFront ? "auto" : "none",
              }}
            >
              <Image
                src={photo.image}
                alt={photo.caption}
                fill
                priority={isFront}
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
              />
              {isFront && (
                <div className="absolute inset-x-0 bottom-0 flex items-end bg-linear-to-t from-(--color-panel) via-(--color-panel)/90 to-transparent px-4 pb-4 pt-12">
                  <p className="text-left text-sm uppercase tracking-widest text-normal">
                    {photo.caption}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
