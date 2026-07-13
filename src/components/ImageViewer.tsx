"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface ImageViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageViewer({ src, alt, onClose }: ImageViewerProps) {
  return (
    <div
      className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={18} />
      </button>
      <div className="animate-scale-in relative max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={800}
          height={1080}
          className="max-h-[88vh] w-auto rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
