"use client";

import { sitePath } from "./site-path";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { type: "image" as const, src: sitePath("/elijah-portrait.jpg"), alt: "Portrait of Elijah Deen", width: 1365, height: 2048 },
  { type: "image" as const, src: sitePath("/hero-welding.png"), alt: "Elijah welding a steel fixture at Sonoco", width: 1179, height: 2019 },
  { type: "image" as const, src: sitePath("/hero-vex.png"), alt: "Elijah working on a robotics assembly at VEX", width: 516, height: 437 },
  { type: "image" as const, src: sitePath("/projects/gallery/conveyor-original.jpg"), alt: "Original linear conveyor design", width: 420, height: 328 },
  { type: "video" as const, src: sitePath("/assembly-timelapse.mp4"), alt: "Timelapse of Elijah assembling a project" },
];

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const change = (direction: number) => setIndex(current => (current + direction + slides.length) % slides.length);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (slides[index].type === "video") {
      video.currentTime = 0;
      void video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [index]);

  return <div className="photo-carousel" aria-label="Photos and video of Elijah at work">
    <button type="button" className="photo-arrow" onClick={() => change(-1)} aria-label="Previous photo"><ChevronLeft size={36}/></button>
    <div className="photo-slide" aria-live="polite">
      {slides.map((slide, slideIndex) => slide.type === "video"
        ? <video key={slide.src} ref={videoRef} className={slideIndex === index ? "active" : ""} src={slide.src} aria-label={slide.alt} aria-hidden={slideIndex !== index} muted playsInline loop preload="metadata"/>
        : <img key={slide.src} className={slideIndex === index ? "active" : ""} src={slide.src} alt={slideIndex === index ? slide.alt : ""} aria-hidden={slideIndex !== index} width={slide.width} height={slide.height}/>)}
    </div>
    <button type="button" className="photo-arrow" onClick={() => change(1)} aria-label="Next photo"><ChevronRight size={36}/></button>
    <div className="slide-progress" aria-label="Choose a slide">
      {slides.map((slide, slideIndex) => <button key={slide.src} type="button" className={`slide-marker${slideIndex === index ? " active" : ""}`} onClick={() => setIndex(slideIndex)} aria-label={`Show slide ${slideIndex + 1} of ${slides.length}`} aria-pressed={slideIndex === index}/>)}
    </div>
  </div>;
}
