"use client";

import { useState } from "react";
import Photo from "./Photo";

export default function Gallery({ images, name }) {
  const [index, setIndex] = useState(0);
  const current = images[index];
  const multiple = images.length > 1;

  const step = (direction) => {
    setIndex((value) => (value + direction + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden bg-graphite sm:aspect-[16/9]">
        <div key={current.src} className="fade-frame absolute inset-0">
          <Photo
            src={current.src}
            alt={current.alt}
            priority={index === 0}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>
        {multiple ? (
          <div className="absolute inset-x-0 bottom-0 flex justify-between p-3">
            <button
              type="button"
              className="btn btn-ghost bg-black/35 px-4 backdrop-blur-sm"
              onClick={() => step(-1)}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-ghost bg-black/35 px-4 backdrop-blur-sm"
              onClick={() => step(1)}
            >
              Next
            </button>
          </div>
        ) : null}
      </div>

      {multiple ? (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {images.map((image, imageIndex) => {
            const selected = imageIndex === index;
            return (
              <button
                key={image.src}
                type="button"
                aria-current={selected ? "true" : undefined}
                aria-label={`Show photograph ${imageIndex + 1} of ${name}: ${image.alt}`}
                onClick={() => setIndex(imageIndex)}
                className={`relative aspect-[16/10] overflow-hidden bg-graphite ${
                  selected ? "ring-1 ring-ivory" : "opacity-70"
                }`}
              >
                <Photo src={image.src} alt="" sizes="30vw" />
              </button>
            );
          })}
        </div>
      ) : null}

      <p className="mt-4 text-xs leading-6 text-silver">
        Model photography. These frames are not a specific car held in stock.
      </p>
    </div>
  );
}
