import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import ThemeToggle from "../theme-toggle";
import { sitePath } from "../site-path";
import ContactLinks from "../contact-links";
import GripperProduction from "./gripper-production";
import { gripperAssembly, gripperPositions, gripperDetails } from "./gripper-cad";

function CadFigure({ image }: { image: { src: string; alt: string; caption: string; detail?: string } }) {
  return <figure className="gripper-cad-figure"><a href={image.src} target="_blank" rel="noreferrer" aria-label={`Enlarge: ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy"/></a><figcaption><strong>{image.caption}</strong>{image.detail && <span>{image.detail}</span>}</figcaption></figure>;
}

export default function GripperCaseStudy() {
  return <main className="case-study">
    <header className="site-header">
      <a className="wordmark" href={sitePath("/")} aria-label="Elijah Deen, home">Elijah <span>Deen</span></a>
      <nav aria-label="Project navigation"><a href={sitePath("/#work")}>Projects</a><a href="#operation">In operation</a></nav>
      <div className="header-actions"><ThemeToggle/><a className="header-cta" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">Resume <Download size={16}/></a></div>
    </header>
    <div className="case-study-content">
      <a className="back-link" href={sitePath("/#work")}><ArrowLeft size={16}/> All projects</a>
      <section className="case-study-intro" aria-labelledby="case-title">
        <p className="case-study-kicker">Sonoco · 2026 / Machine design</p>
        <h1 id="case-title">Flange Alignment<br/>Gripper Tool</h1>
        <p className="case-study-deck">A pneumatic gripper that keeps wooden flanges aligned as they enter the nailer.</p>
        <dl className="case-study-facts">
          <div><dt>My role</dt><dd>Mechanical design through installation</dd></div>
          <div><dt>Tools & methods</dt><dd>Inventor · Pneumatics · FEA</dd></div>
          <div><dt>Deployment</dt><dd>Two production lines</dd></div>
        </dl>
        <div className="case-study-ownership"><h2>My contribution</h2><p>I handled the CAD design, cylinder-force calculations, fabrication, and installation.</p></div>
        <figure className="case-study-hero-image"><img src={sitePath("/projects/gallery/clamp-close-iso.jpeg")} alt="Fabricated flange alignment gripper viewed from above"/><figcaption>Fabricated gripper assembly</figcaption></figure>
      </section>
      <nav className="case-study-contents" aria-label="On this page"><a href="#problem">01 / Problem</a><a href="#integration">02 / Assembly</a><a href="#configurations">03 / Three positions</a><a href="#manifold">04 / Pneumatics and controls</a><a href="#cylinders">05 / Cylinder adjustment</a><a href="#operation">06 / Installation and use</a></nav>
      <section className="case-study-section" id="problem">
        <div className="case-study-section-label"><span>01</span><h2>Problem</h2></div>
        <div className="case-study-body">
          <p>The existing flat pusher allowed wooden flanges to shift sideways as they entered the nailer, causing off-center nails. The clamp needed to mount to the existing introducer, grip the flange above the table, and retract beneath it when not in use.</p>
          <figure>
            <video controls playsInline preload="none" poster={sitePath("/projects/gallery/introducer-line-3-before.jpg")} aria-label="Line 3 introducer before the gripper installation">
              <source src={sitePath("/projects/gallery/introducer-line-3-before.mp4")} type="video/mp4"/>
              Your browser does not support video playback.
            </video>
            <figcaption>Line 3 before installation</figcaption>
          </figure>
        </div>
      </section>
      <section className="case-study-section" id="integration">
        <div className="case-study-section-label"><span>02</span><h2>Assembly</h2></div>
        <div className="case-study-body"><p>The gripper mounts to the original introducer. I used measurements from the machine to locate the mounting points.</p>
          <CadFigure image={gripperAssembly}/>
        </div>
      </section>
      <section className="case-study-section" id="configurations">
        <div className="case-study-section-label"><span>03</span><h2>Three positions</h2></div>
        <div className="case-study-body"><p>The gripper rises from below the table to receive the flange, then closes to hold it aligned for the nailer.</p></div>
        <div className="gripper-cad-positions" aria-label="Three gripper configurations">{gripperPositions.map(image => <CadFigure key={image.src} image={image}/>)}</div>
      </section>
      <section className="case-study-section" id="manifold">
        <div className="case-study-section-label"><span>04</span><h2>Pneumatics and controls</h2></div>
        <div className="case-study-body"><p>I selected the pneumatic components and collaborated with a controls engineer on PLC and software integration.</p><CadFigure image={gripperDetails[0]}/></div>
      </section>
      <section className="case-study-section" id="cylinders">
        <div className="case-study-section-label"><span>05</span><h2>Cylinder adjustment</h2></div>
        <div className="case-study-body"><p>Inline cylinders provide the vertical motion. Adjustable spacers allow the jaw height to be set during installation.</p><CadFigure image={gripperDetails[1]}/></div>
      </section>
      <section className="case-study-section" id="operation">
        <div className="case-study-section-label"><span>06</span><h2>Installation and use</h2></div>
        <div className="case-study-body">
          <p>I checked the gripper’s motion during installation. Two grippers are in use, and a Texas installation is planned.</p>
          <GripperProduction/>
          <figure>
            <video controls playsInline preload="none" poster={sitePath("/projects/gallery/introducer-line-3-after.jpg")} aria-label="Line 3 introducer after the gripper installation">
              <source src={sitePath("/projects/gallery/introducer-line-3-after.mp4")} type="video/mp4"/>
              Your browser does not support video playback.
            </video>
            <figcaption>Line 3 after installation</figcaption>
          </figure>
        </div>
      </section>
      <footer className="case-study-footer"><a className="case-study-link" href={sitePath("/#work")}><ArrowLeft size={18}/> Explore more projects</a><a className="text-link" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a></footer>
      <ContactLinks/>
    </div>
  </main>;
}
