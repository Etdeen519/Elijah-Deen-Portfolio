"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  organization: string;
  category: string;
  description: string;
  skills: string[];
  images: { src: string; alt: string; video?: boolean }[];
};

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const project = projects[projectIndex];

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("project");
    if (!slug) return;
    const index = projects.findIndex(item => item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") === slug);
    if (index >= 0) setProjectIndex(index);
  }, [projects]);

  function changeProject(direction: number) {
    setProjectIndex(current => (current + direction + projects.length) % projects.length);
    setImageIndex(0);
  }

  function changeImage(direction: number) {
    setImageIndex(current => (current + direction + project.images.length) % project.images.length);
  }

  return <section className="project-carousel-section" id="project-carousel" aria-label="Browse all projects">


    <article className="project-feature" key={project.title}>

      <div className="project-feature-media">
        {project.images.length ? <>
          {project.images[imageIndex].video
            ? <video key={project.images[imageIndex].src} src={project.images[imageIndex].src} aria-label={project.images[imageIndex].alt} autoPlay muted loop playsInline preload="metadata"/>
            : <img key={project.images[imageIndex].src} src={project.images[imageIndex].src} alt={project.images[imageIndex].alt}/>}
          {project.images.length > 1 && <div className="project-photo-controls">
            <button type="button" onClick={() => changeImage(-1)} aria-label={`Previous media of ${project.title}`}><ChevronLeft size={20}/></button>
            <div className="project-photo-dots" aria-label={`Media ${imageIndex + 1} of ${project.images.length}`}>
              {project.images.map((image, index) => <button key={image.src} type="button" className={index === imageIndex ? "active" : ""} onClick={() => setImageIndex(index)} aria-label={`Show ${image.video ? "video" : "image"} ${index + 1} of ${project.title}`} aria-current={index === imageIndex ? "true" : undefined}/>)}
            </div>
            <button type="button" onClick={() => changeImage(1)} aria-label={`Next media of ${project.title}`}><ChevronRight size={20}/></button>
          </div>}
        </> : <div className="project-no-image"><span>PROJECT {String(projectIndex + 1).padStart(2, "0")}</span><strong>{project.title}</strong></div>}
      </div>
      <div className="project-feature-copy">
        <div className="archive-meta"><span>{project.category}</span><span>{project.organization}</span></div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tag-row">{project.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
      </div>
    </article>
    <div className="project-navigation">
    <div className="project-carousel-heading">
      <div><span className="project-carousel-kicker">PROJECTS</span><p>{String(projectIndex + 1).padStart(2, "0")} <span>/ {String(projects.length).padStart(2, "0")}</span></p></div>

    </div>
      <div className="project-switcher" aria-label="Project controls">
        <button type="button" onClick={() => changeProject(-1)} aria-label="Previous project"><ChevronLeft size={26}/></button>
        <button type="button" onClick={() => changeProject(1)} aria-label="Next project"><ChevronRight size={26}/></button>
      </div>
    <div className="project-rail" aria-label="Choose a project">
      {projects.map((item, index) => <button type="button" key={item.title} className={index === projectIndex ? "active" : ""} onClick={() => {setProjectIndex(index);setImageIndex(0)}} aria-label={`Show ${item.title}`} aria-current={index === projectIndex ? "true" : undefined}><span className="project-tab-line"/><span className="project-tab-label" aria-hidden="true">{item.title}</span></button>)}
    </div>
    </div>
    <p className="project-rail-hint">Use the large arrows to browse projects. Media controls appear when a project has multiple views.</p>
  </section>;
}
