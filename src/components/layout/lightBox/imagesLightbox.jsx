"use client";
import photo1 from "@/assets/imageShowcase/photo1.jpg";
import photo2 from "@/assets/imageShowcase/photo2.jpg";
import photo3 from "@/assets/imageShowcase/photo3.jpg";
import photo4 from "@/assets/imageShowcase/photo4.jpg";
import photo5 from "@/assets/imageShowcase/photo5.jpg";
import photo6 from "@/assets/imageShowcase/photo6.jpg";
import photo7 from "@/assets/imageShowcase/photo7.jpg";
import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    id: 1,
    image: photo1,
    caption: "Graduation Photoshoot",
    rotation: -12,
  },
  {
    id: 2,
    image: photo2,
    caption: "Graduation Photoshoot",
    rotation: 12,
  },
  {
    id: 3,
    image: photo3,
    caption: "Graduation Photoshoot",
    rotation: -5,
  },
  {
    id: 4,
    image: photo4,
    caption: "Graduation Photoshoot",
    rotation: 8,
  },
  {
    id: 5,
    image: photo5,
    caption: "Graduation Photoshoot",
    rotation: 6,
  },
  {
    id: 6,
    image: photo6,
    caption: "Graduation Photoshoot",
    rotation: -8,
  },
  {
    id: 7,
    image: photo7,
    caption: "Graduation Photoshoot",
    rotation: 10,
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
                <div className="absolute inset-x-0 bottom-0 flex items-end bg-linear-to-t from-(--color-bg)/90 via-(--color-bg)/40 to-transparent px-4 pb-4 pt-12">
                  <p className="text-left text-base uppercase tracking-widest text-normal">
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
