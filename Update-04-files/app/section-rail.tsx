"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Home" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "How I work" },
  { id: "contact", label: "Contact" },
];

export default function SectionRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    function update() {
      const threshold = Math.max(120, window.innerHeight * .4);
      let current = 0;
      sections.forEach(({ id }, index) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= threshold) current = index;
      });
      setActive(current);
      frame = 0;
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <nav className="section-rail" aria-label="Page sections">
    <span className="section-rail-track" aria-hidden="true"><span style={{ height: `${active * 25}%` }}/></span>
    {sections.map(({ id, label }, index) => <a key={id} href={`#${id}`} className={index === active ? "active" : ""} aria-label={`Go to ${label}`} aria-current={index === active ? "location" : undefined}>
      <span className="section-rail-dot" aria-hidden="true"/>
      <span className="section-rail-label" aria-hidden="true">{label}</span>
    </a>)}
  </nav>;
}
