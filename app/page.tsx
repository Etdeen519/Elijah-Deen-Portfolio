import { sitePath } from "./site-path";
import { ArrowDownRight, ArrowUpRight, Box, Download, Hammer, MapPin, Ruler, Wrench } from "lucide-react";
import PhotoCarousel from "./photo-carousel";
import ThemeToggle from "./theme-toggle";
import ProjectCarousel from "./projects/project-carousel";
import { projects } from "./projects/page";

const experience = [
  ["2026","Sonoco Products Company","Mechanical Engineering Co-op","Machine design and automation · Hartselle, Alabama"],
  ["2026","Sonoco Products Company","Mechanical Engineering Intern","Plant equipment and process improvement · Jefferson, Texas"],
  ["2025","VEX Robotics","Mechanical Engineering Intern","Educational robotics product development · Greenville, Texas"],
  ["2024","Oldcastle BuildingEnvelope","Engineering Intern","CAD systems and engineering documentation"],
];

const skills = [
  { icon:Box, label:"CAD", detail:"SolidWorks · Inventor · AutoCAD" },
  { icon:Ruler, label:"Design", detail:"Machine design · DFM/DFA · GD&T" },
  { icon:Hammer, label:"Build", detail:"MIG · Stick · Machining · 3D printing" },
  { icon:Wrench, label:"Systems", detail:"Pneumatics · Automation · Testing" },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Elijah Deen, home">ED<span>/</span>ME</a>
      <nav aria-label="Primary navigation"><a href="#work">Projects</a><a href="#experience">Experience</a><a href="#about">About</a></nav>
      <div className="header-actions"><ThemeToggle/><a className="header-cta" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">Resume <Download size={16}/></a></div>
    </header>

    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true"/>
      <div className="hero-copy">
        <p className="eyebrow"><span/> Mechanical engineering student at Texas A&amp;M</p>
        <h1>Elijah <em>Deen</em></h1>
        <p className="hero-intro">{/* Add Elijah’s introduction paragraph here. */}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View projects <ArrowDownRight size={18}/></a>
          <a className="text-link" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a>
        </div>
      </div>
      <PhotoCarousel/>
      <div className="hero-meta">
        <div><span>LOCATION</span><strong><MapPin size={14}/> Texas / Alabama</strong></div>
        <div><span>FOCUS</span><strong>Product + Machine Design</strong></div>
        <div><span>EDUCATION</span><strong>Texas A&amp;M University</strong></div>
      </div>
    </section>

    <section className="home-projects" id="work">
      <ProjectCarousel projects={projects}/>
    </section>

    <section className="section experience" id="experience">
      <div className="section-heading compact"><p className="section-index">02 / EXPERIENCE</p><h2>Learning by<br/>building.</h2></div>
      <div className="timeline">{experience.map(([year,company,role,note])=><div className="timeline-row" key={company+role}><span className="timeline-year">{year}</span><div><h3>{company}</h3><p>{note}</p></div><strong>{role}</strong></div>)}</div>
    </section>

    <section className="section about" id="about">
      <div className="about-copy"><p className="section-index">03 / HOW I WORK</p><h2>Curious enough to ask why.<br/>Hands-on enough to find out.</h2><p>I’m drawn to engineering problems where the answer has to survive outside the computer. My best work happens at the intersection of careful analysis and quick iteration: measuring the real system, creating a concept, building it, and learning from what happens next.</p></div>
      <div className="skill-grid">{skills.map(({icon:Icon,label,detail})=><div className="skill" key={label}><Icon size={22} strokeWidth={1.5}/><span>{label}</span><p>{detail}</p></div>)}</div>
    </section>

    <footer id="contact">
      <p className="section-index">04 / NEXT PROJECT</p><h2>Let’s build something<br/><em>worth testing.</em></h2>
      <p className="footer-copy">Currently exploring full-time mechanical engineering opportunities in product development, robotics, and manufacturing.</p>
      <div className="footer-actions"><a className="button button-light" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">Download resume <Download size={18}/></a><a className="footer-link" href="#top">Back to top <ArrowUpRight size={16}/></a></div>
      <div className="footer-bottom"><span>ELIJAH T. DEEN</span><span>MECHANICAL ENGINEER</span><span>© 2026</span></div>
    </footer>
  </main>;
}
