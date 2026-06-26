"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, Camera } from "lucide-react";

const TOTAL = 20;

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {Array.from({ length: TOTAL }, (_, i) => i + 1).map((n) => (
          <div
            key={n}
            onClick={() => setLightbox(n)}
            className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative transition-transform duration-200 hover:scale-105"
            style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
          >
            {/* Try loading the image; show placeholder if not found */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
              <Camera size={28} style={{ color: "#444" }} />
              <span className="text-xs text-gray-600 text-center px-2">Photo Coming Soon</span>
              <span className="text-xs text-gray-700">#{n}</span>
            </div>
            {/*
              CLIENT: Drop photos named image1.jpg through image20.jpg
              into /public/images/gallery/ and redeploy — no code changes needed.
            */}
            <Image
              src={`/images/gallery/image${n}.jpg`}
              alt={`Gallery photo ${n}`}
              fill
              className="object-cover z-20 transition-opacity duration-300"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.4)" }}>
              <span className="text-white font-bold text-sm">View</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-3xl aspect-square rounded-2xl overflow-hidden" style={{ background: "#111" }}>
            <Image
              src={`/images/gallery/image${lightbox}.jpg`}
              alt={`Gallery photo ${lightbox}`}
              fill
              className="object-contain"
              sizes="90vw"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <Camera size={48} style={{ color: "#333" }} />
              <p className="text-gray-600">Photo {lightbox} Coming Soon</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
