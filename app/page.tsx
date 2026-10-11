import { sitePath } from "./site-path";
import { ArrowDownRight, ArrowUpRight, Box, Download, Factory, Gauge, Hammer, Layers3, MapPin, MoveUpRight, Ruler, Wrench } from "lucide-react";
import PhotoCarousel from "./photo-carousel";
import ThemeToggle from "./theme-toggle";

const projects = [
  { number:"01", type:"PROCESS IMPROVEMENT · SONOCO", title:"Rear Axle Truck Scale", summary:"Designed and fabricated a four-bar scale mechanism that gives operators an objective measurement of trailer payload.", tags:["Machine Design","Fabrication","Testing"], result:"$34.5K", resultLabel:"projected annual savings", image:sitePath("/projects/truck-scale.png"), alt:"CAD model of the rear axle truck scale", icon:Gauge },
  { number:"02", type:"FABRICATION · SONOCO", title:"Half Stacker", summary:"Designed, fabricated, painted, and installed a fixture that keeps partial lumber bundles contained during restacking.", tags:["3-Day Build","Welding","Operator Feedback"], result:"69%", resultLabel:"estimated time reduction", image:sitePath("/projects/half-stacker.jpg"), alt:"Half stacker holding a bundle of lumber in the plant", icon:Layers3 },
  { number:"03", type:"PRODUCT DEVELOPMENT · VEX ROBOTICS", title:"Integrated Motor Conveyor", summary:"Redesigned an educational robotics conveyor around an internal motor and gearbox with production assembly in mind.", tags:["SolidWorks","DFM","DFA"], result:"3 PARTS", resultLabel:"injection-moldable housing", image:sitePath("/projects/linear-conveyor.jpg"), alt:"Completed prototype of the VEX linear conveyor", icon:MoveUpRight },
  { number:"04", type:"MANUFACTURING · SONOCO", title:"Bandsaw Dust Collection", summary:"Developed a source-capture nozzle through rapid prototypes and airflow testing, then prepared the final sheet-metal design.", tags:["Airflow","Testing","Sheet Metal"], result:"4 BUILDS", resultLabel:"iterative prototypes", image:sitePath("/projects/bandsaw-collector.jpg"), alt:"Fabricated prototype for the bandsaw dust collector", icon:Factory },
];

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
      <nav aria-label="Primary navigation"><a href="#work">Work</a><a href={sitePath("/projects/")}>All projects</a><a href="#experience">Experience</a></nav>
      <div className="header-actions"><ThemeToggle/><a className="header-cta" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">Resume <Download size={16}/></a></div>
    </header>

    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true"/>
      <div className="hero-copy">
        <p className="eyebrow"><span/> Mechanical engineering student at Texas A&amp;M</p>
        <h1>Elijah<br/><em>Deen</em></h1>
        <p className="hero-intro">I like making new things and solving problems by building something better.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View selected work <ArrowDownRight size={18}/></a>
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

    <section className="section projects" id="work">
      <div className="section-heading"><p className="section-index">01 / SELECTED WORK</p><h2>Projects built around<br/>real constraints.</h2><p>From factory equipment to educational robotics, each project moved from a rough problem to a physical, testable solution.</p></div>
      <div className="project-list">{projects.map(project => {
        const Icon=project.icon;
        const slug=project.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
        return <a className="project-card" href={sitePath(`/projects/?project=${slug}#project-carousel`)} key={project.number} aria-label={`View ${project.title} in all projects`}>
          <div className="project-image"><img src={project.image} alt={project.alt}/><div className="project-top"><span className="project-number">{project.number}</span><Icon size={24} strokeWidth={1.5}/></div></div>
          <div className="project-body"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
          <div className="project-bottom"><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-result"><strong>{project.result}</strong><span>{project.resultLabel}</span></div></div></div>
        </a>;
      })}</div>
      <div className="all-projects-cta"><p>More work in robotics, machine design, fabrication, and thermal systems.</p><a className="button button-primary" href={sitePath("/projects/")}>Explore all projects <ArrowUpRight size={18}/></a></div>
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
