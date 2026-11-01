import { sitePath } from "./site-path";
import { ArrowUpRight, Download } from "lucide-react";
import PhotoCarousel from "./photo-carousel";
import ThemeToggle from "./theme-toggle";
import ProjectGrid from "./projects/project-grid";
import { projects } from "./projects/project-data";
import ContactLinks from "./contact-links";

const experience = [
  ["2026","Sonoco Products Company","Mechanical Engineering Co-op","Machine design and automation · Hartselle, Alabama"],
  ["2026","Sonoco Products Company","Mechanical Engineering Intern","Plant equipment and process improvement · Jefferson, Texas"],
  ["2025","VEX Robotics","Mechanical Engineering Intern","Educational robotics product development · Greenville, Texas"],
  ["2024","Oldcastle BuildingEnvelope","Engineering Intern","CAD systems and engineering documentation"],
];

const featuredTitles = ["Flange Alignment Gripper Tool", "Integrated Motor Conveyor", "Repair Turntable"];

export default function Home() {
  return <main className="portfolio-home">
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Elijah Deen, home">Elijah <span>Deen</span></a>
      <nav aria-label="Primary navigation"><a href="#work">Projects</a><a href="#experience">Experience</a></nav>
      <div className="header-actions"><ThemeToggle/><a className="header-cta" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">Resume <Download size={16}/></a></div>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <h1>Elijah <em>Deen</em></h1>
        <p className="hero-summary">Mechanical engineer focused on machine design, robotics, and manufacturing. I design, build, and test equipment that solves production problems.</p>
        <ContactLinks/>
      </div>
      <PhotoCarousel/>
    </section>

    <section className="home-projects">
      <div className="home-grid-heading" id="work"><h2>Selected work.</h2></div>
      <ProjectGrid projects={projects} featuredTitles={featuredTitles}/>
    </section>

    <section className="section experience" aria-labelledby="experience-heading">
      <div className="section-heading compact" id="experience"><h2 id="experience-heading">Experience.</h2></div>
      <div className="timeline">{experience.map(([year,company,role,note])=><div className="timeline-row" key={company+role}><span className="timeline-year">{year}</span><div><h3>{company}</h3><p>{note}</p></div><strong>{role}</strong></div>)}</div>
    </section>

    <footer className="site-footer" id="contact">
      <div className="footer-content">
        <div className="footer-heading"><h2>What’s next?</h2><p>Currently exploring full-time mechanical engineering opportunities in product development, robotics, and manufacturing.</p></div>
        <ContactLinks/>
        <div className="footer-actions"><a className="button button-primary" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">View resume <Download size={18}/></a><a className="footer-link" href="#top">Back to top <ArrowUpRight size={16}/></a></div>
      </div>
      <div className="footer-bottom"><span>ELIJAH T. DEEN</span><span>MECHANICAL ENGINEER</span><span>© 2026</span></div>
    </footer>
  </main>;
}
