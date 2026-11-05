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
        <h1 id="case-title">Flange Alignment<br/>Gripper Tool.</h1>
        <p className="case-study-deck">A pneumatic gripper that keeps wooden flanges aligned as they enter the nailer.</p>
        <dl className="case-study-facts">
          <div><dt>My role</dt><dd>Mechanical design through installation</dd></div>
          <div><dt>Tools & methods</dt><dd>Inventor · Pneumatics · FEA</dd></div>
          <div><dt>Deployment</dt><dd>Two production lines</dd></div>
        </dl>
        <div className="case-study-ownership"><h2>My contribution</h2><p>I designed, fabricated, and installed the mechanical system, including CAD, cylinder sizing, and welding. I collaborated with a controls engineer on PLC and software integration.</p></div>
        <figure className="case-study-hero-image"><img src={sitePath("/projects/gallery/clamp-close-iso.jpeg")} alt="Fabricated flange alignment gripper viewed from above"/><figcaption>The welded metal gripper assembly, designed to mount to the existing introducer.</figcaption></figure>
      </section>
      <nav className="case-study-contents" aria-label="On this page"><a href="#problem">01 / Problem</a><a href="#integration">02 / Design</a><a href="#operation">03 / In production</a></nav>
      <section className="case-study-section" id="problem">
        <div className="case-study-section-label"><span>01 / The problem</span><h2>Keep the flanges centered.</h2></div>
        <div className="case-study-body"><p>The existing flat pusher allowed wooden flanges to shift sideways as they entered the nailer, causing off-center nails. The clamp needed to mount to the existing introducer, grip the flange above the table, and retract beneath it when not in use.</p><div className="problem-video-space" role="img" aria-label="Video of the original introducer will be added here"><span>Before the gripper</span><p>Original introducer video coming soon.</p></div></div>
      </section>
      <section className="case-study-section" id="integration">
        <div className="case-study-section-label"><span>02 / Design</span><h2>One fixture. Three positions.</h2></div>
        <div className="case-study-body"><p>I designed a pneumatic mechanism with recessed, open, and clamped positions, sizing the cylinders from the required clamping force. I measured the existing equipment and built in height adjustment to fine-tune the fit during installation.</p>
          <CadFigure image={gripperAssembly}/>
        </div>
        <div className="gripper-cad-positions" aria-label="Three gripper configurations">{gripperPositions.map(image => <CadFigure key={image.src} image={image}/>)}</div>
        <div className="gripper-cad-details" aria-label="Pneumatic design details">{gripperDetails.map(image => <CadFigure key={image.src} image={image}/>)}</div>
      </section>
      <section className="case-study-section" id="operation">
        <div className="case-study-section-label"><span>03 / In production</span><h2>Built, tested, and installed.</h2></div>
        <div className="case-study-body"><p>The gripper performed the required motion during installation testing and now operates on two production lines. A Texas installation is planned.</p><GripperProduction/><figure><video controls playsInline preload="none" poster={sitePath("/projects/gallery/clamp-on-introducer.jpeg")} aria-label="Flange alignment gripper operating on the nailer"><source src={sitePath("/projects/gallery/clamp-first-video.mp4")} type="video/mp4"/>Your browser does not support video playback.</video><figcaption>The gripper in operation.</figcaption></figure></div>
      </section>
      <footer className="case-study-footer"><a className="case-study-link" href={sitePath("/#work")}><ArrowLeft size={18}/> Explore more projects</a><a className="text-link" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a></footer>
      <ContactLinks/>
    </div>
  </main>;
}
