import { sitePath } from "./site-path";
import { ArrowUpRight, Download } from "lucide-react";
import PhotoCarousel from "./photo-carousel";
import ThemeToggle from "./theme-toggle";
import ProjectGrid from "./projects/project-grid";
import SectionRail from "./section-rail";
import { projects } from "./projects/page";

const experience = [
  ["2026","Sonoco Products Company","Mechanical Engineering Co-op","Machine design and automation · Hartselle, Alabama"],
  ["2026","Sonoco Products Company","Mechanical Engineering Intern","Plant equipment and process improvement · Jefferson, Texas"],
  ["2025","VEX Robotics","Mechanical Engineering Intern","Educational robotics product development · Greenville, Texas"],
  ["2024","Oldcastle BuildingEnvelope","Engineering Intern","CAD systems and engineering documentation"],
];

const skills = [
  { label:"CAD", detail:"SolidWorks · Inventor · AutoCAD" },
  { label:"Design", detail:"Machine design · DFM/DFA · GD&T" },
  { label:"Build", detail:"MIG · Stick · Machining · 3D printing" },
  { label:"Systems", detail:"Pneumatics · Automation · Testing" },
];

export default function Home() {
  return <main>
    <SectionRail/>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Elijah Deen, home">Elijah <span>Deen</span></a>
      <nav aria-label="Primary navigation"><a href="#work">Projects</a><a href="#experience">Experience</a><a href="#about">About</a></nav>
      <div className="header-actions"><ThemeToggle/><a className="header-cta" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">Resume <Download size={16}/></a></div>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <h1>Elijah <em>Deen</em></h1>
      </div>
      <PhotoCarousel/>
    </section>

    <section className="home-projects">
      <div className="home-grid-heading" id="work"><h2>Projects.</h2><a href={sitePath("/projects")}>View carousel <ArrowUpRight size={20}/></a></div>
      <ProjectGrid projects={projects}/>
    </section>

    <section className="section experience" id="experience">
      <div className="section-heading compact"><h2>Experience.</h2></div>
      <div className="timeline">{experience.map(([year,company,role,note])=><div className="timeline-row" key={company+role}><span className="timeline-year">{year}</span><div><h3>{company}</h3><p>{note}</p></div><strong>{role}</strong></div>)}</div>
    </section>

    <section className="section about" id="about">
      <div className="about-heading"><h2>How I work.</h2><p>I’m drawn to engineering problems where the answer has to survive outside the computer. My best work happens at the intersection of careful analysis and quick iteration: measuring the real system, creating a concept, building it, and learning from what happens next.</p></div>
      <div className="skill-grid">{skills.map(({label,detail},index)=><div className="skill" key={label}><span className="skill-number">0{index+1}</span><h3>{label}</h3><p>{detail}</p></div>)}</div>
    </section>

    <footer id="contact">
      <p className="section-index">04 / NEXT PROJECT</p><h2>Let’s build something<br/><em>worth testing.</em></h2>
      <p className="footer-copy">Currently exploring full-time mechanical engineering opportunities in product development, robotics, and manufacturing.</p>
      <div className="footer-actions"><a className="button button-light" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">Download resume <Download size={18}/></a><a className="footer-link" href="#top">Back to top <ArrowUpRight size={16}/></a></div>
      <div className="footer-bottom"><span>ELIJAH T. DEEN</span><span>MECHANICAL ENGINEER</span><span>© 2026</span></div>
    </footer>
  </main>;
}
