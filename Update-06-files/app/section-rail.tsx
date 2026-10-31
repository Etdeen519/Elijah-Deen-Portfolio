"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Intro" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "How I work" },
  { id: "contact", label: "Next project" },
];

export default function SectionRail() {
  const [position, setPosition] = useState({ progress: 0, active: 0 });

  useEffect(() => {
    let frame = 0;
    function update() {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      const threshold = Math.max(120, window.innerHeight * .4);
      let active = 0;
      sections.forEach(({ id }, index) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= threshold) active = index;
      });
      setPosition({ progress, active });
      frame = 0;
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <aside className="scroll-position" aria-label={`Page position: ${sections[position.active].label}, ${Math.round(position.progress * 100)} percent`}>
    <div className="scroll-position-copy">
      <strong>{sections[position.active].label}</strong>
      <span className="scroll-position-percent">{String(Math.round(position.progress * 100)).padStart(2, "0")}%</span>
    </div>
    <div className="scroll-position-track" aria-hidden="true">
      <span className="scroll-position-fill" style={{ height: `${position.progress * 100}%` }}/>
      <span className="scroll-position-thumb" style={{ top: `${position.progress * 100}%`, transform: `translateY(-${position.progress * 100}%)` }}/>
    </div>
  </aside>;
}
