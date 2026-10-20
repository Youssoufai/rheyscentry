"use client";

import Image from "next/image";
import { useState } from "react";

export default function Photo({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#2a2926_0%,#080808_72%)]">
        <span className="sr-only">{alt}. Photograph unavailable.</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
