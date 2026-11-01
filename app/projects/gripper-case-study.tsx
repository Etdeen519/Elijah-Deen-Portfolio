import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import ThemeToggle from "../theme-toggle";
import { sitePath } from "../site-path";

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
        <div className="case-study-ownership"><h2>My contribution</h2><p>I designed, fabricated, and installed the mechanical system, including CAD, cylinder sizing, and welding. I collaborated with a controls engineer on integration.</p></div>
        <figure className="case-study-hero-image"><img src={sitePath("/projects/gallery/clamp-close-iso.jpeg")} alt="Fabricated flange alignment gripper viewed from above"/><figcaption>The welded metal gripper assembly, designed to mount to the existing introducer.</figcaption></figure>
      </section>
      <nav className="case-study-contents" aria-label="On this page"><a href="#problem">01 / Problem</a><a href="#integration">02 / Design</a><a href="#operation">03 / In production</a></nav>
      <section className="case-study-section" id="problem">
        <div className="case-study-section-label"><span>01 / The problem</span><h2>Sideways movement. Off-center nails.</h2></div>
        <div className="case-study-body"><p>The existing flat pusher allowed wooden flanges to shift sideways as they entered the nailer, causing off-center nails. The new clamp needed to hold them aligned and retract below the table without replacing the existing introducer.</p></div>
      </section>
      <section className="case-study-section" id="integration">
        <div className="case-study-section-label"><span>02 / Design</span><h2>One fixture. Three positions.</h2></div>
        <div className="case-study-body"><p>I designed a pneumatic mechanism with recessed, open, and clamped positions, sizing the cylinders from the required clamping force. I measured the existing equipment and built in height adjustment to fine-tune the fit during installation.</p>
          <figure><img src={sitePath("/projects/gallery/clamp-on-introducer.jpeg")} alt="Flange alignment gripper mounted on the existing introducer" loading="lazy"/><figcaption>The gripper mounted to the existing introducer.</figcaption></figure>
        </div>
      </section>
      <section className="case-study-section" id="operation">
        <div className="case-study-section-label"><span>03 / In production</span><h2>Built, tested, and installed.</h2></div>
        <div className="case-study-body"><p>The gripper performed the required motion during installation testing and now operates on two production lines.</p><div className="case-study-results"><div><strong>2</strong><span>Production lines</span></div><div><strong>3</strong><span>Shifts per day</span></div><div><strong>5</strong><span>Days per week</span></div></div><figure><video controls playsInline preload="none" poster={sitePath("/projects/gallery/clamp-on-introducer.jpeg")} aria-label="Flange alignment gripper operating on the nailer"><source src={sitePath("/projects/gallery/clamp-first-video.mp4")} type="video/mp4"/>Your browser does not support video playback.</video><figcaption>The gripper in operation.</figcaption></figure></div>
      </section>
      <footer className="case-study-footer"><a className="case-study-link" href={sitePath("/#work")}><ArrowLeft size={18}/> Explore more projects</a><a className="text-link" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a></footer>
    </div>
  </main>;
}
