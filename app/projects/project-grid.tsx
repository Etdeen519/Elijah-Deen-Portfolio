"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

type Media = { src: string; alt: string; video?: boolean };
type Project = {
  title: string;
  organization: string;
  description: string;
  skills: string[];
  images: Media[];
};

const summaries: Record<string, string> = {
  "Flange Alignment Gripper Tool": "A production gripper that keeps wooden flanges aligned at the nailer.",
  "Integrated Motor Conveyor": "A compact VEX conveyor designed around its motor and gear train.",
  "Rear Axle Truck Scale": "A scale concept for checking sawdust truck loads before dispatch.",
  "Holtec Lumber Frame for Rebundling": "A frame that makes partial lumber bundles quicker and safer to restack.",
  "Bandsaw Dust Collection": "A tested nozzle and blower concept for capturing sawdust at the blade.",
  "Repair Turntable": "A pneumatic lift and turntable for repairing heavy wooden flanges.",
  "Inclined Conveyor": "A prototype that moves VEX Workcell parts between levels.",
  "Pulsating Heat Exchanger": "A CAD layout for a refrigeration and heat-transfer test rig.",
  "Scissor Lift": "A compact lift designed, built, and tested in MEEN 361.",
  "Snapper Combat Robot": "A three-pound combat robot with a vertical spinner.",
  "FRC 3310 Climber": "A telescoping climbing mechanism for an FRC robot.",
};

function slug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const project = selected === null ? null : projects[selected];
  const media = project?.images ?? [];

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("project");
    if (!requested) return;
    const index = projects.findIndex(item => slug(item.title) === requested);
    if (index >= 0) setSelected(index);
  }, [projects]);

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelected(null);
      } else if (event.key === "ArrowLeft" && media.length > 1) {
        setMediaIndex(current => (current - 1 + media.length) % media.length);
      } else if (event.key === "ArrowRight" && media.length > 1) {
        setMediaIndex(current => (current + 1) % media.length);
      } else if (event.key === "Tab" && dialogRef.current) {
        const buttons = [...dialogRef.current.querySelectorAll<HTMLButtonElement>("button:not([disabled])")];
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [selected, media.length]);

  function openProject(index: number, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setMediaIndex(0);
    setSelected(index);
  }

  return <section className="project-grid-section" aria-label="All projects">
    <div className="project-grid">
      {projects.map((item, index) => {
        const thumbnail = item.images.find(image => !image.video);
        return <button className="project-grid-card" type="button" key={item.title} onClick={event => openProject(index, event.currentTarget)} aria-label={`View ${item.title}`}>
          <span className="project-grid-media">
            {thumbnail ? <img src={thumbnail.src} alt={thumbnail.alt} loading="lazy"/> : <span className="project-grid-placeholder">ED / ME</span>}
          </span>
          <span className="project-grid-card-copy">
            <strong>{item.title} <ArrowUpRight size={19} aria-hidden="true"/></strong>
            <span className="project-grid-summary">{summaries[item.title] ?? item.description}</span>
          </span>
        </button>;
      })}
    </div>

    {project && <div className="project-dialog-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setSelected(null); }}>
      <div className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" ref={dialogRef}>
        <button className="project-dialog-close" type="button" ref={closeRef} onClick={() => setSelected(null)} aria-label="Close project"><X size={26}/></button>
        <div className="project-dialog-media">
          {media.length ? <>
            {media[mediaIndex].video
              ? <video key={media[mediaIndex].src} src={media[mediaIndex].src} aria-label={media[mediaIndex].alt} controls autoPlay muted loop playsInline preload="metadata"/>
              : <img key={media[mediaIndex].src} src={media[mediaIndex].src} alt={media[mediaIndex].alt}/>}
            {media.length > 1 && <div className="project-dialog-controls">
              <button type="button" onClick={() => setMediaIndex(current => (current - 1 + media.length) % media.length)} aria-label="Previous project photo or video"><ChevronLeft size={30}/></button>
              <div className="project-dialog-dots" aria-label="Project media">
                {media.map((item, index) => <button type="button" key={item.src} className={index === mediaIndex ? "active" : ""} onClick={() => setMediaIndex(index)} aria-label={`Show ${item.video ? "video" : "photo"} ${index + 1} of ${media.length}`} aria-current={index === mediaIndex ? "true" : undefined}/>)}
              </div>
              <button type="button" onClick={() => setMediaIndex(current => (current + 1) % media.length)} aria-label="Next project photo or video"><ChevronRight size={30}/></button>
            </div>}
          </> : <div className="project-dialog-placeholder">{project.title}</div>}
        </div>
        <div className="project-dialog-copy">
          <p className="project-dialog-meta">{project.organization}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="project-dialog-description">{project.description}</p>
          <div className="project-dialog-skills">{project.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
        </div>
      </div>
    </div>}
  </section>;
}
