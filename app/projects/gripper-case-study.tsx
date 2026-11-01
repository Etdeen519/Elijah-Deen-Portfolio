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
        <div className="case-study-ownership"><h2>My contribution</h2><p>I handled the mechanical work from concept through installation: CAD design, force calculations, component sourcing, welding, assembly, painting, and the design, printing, and post-processing of the adjustment shims.</p><p>I prepared the purchasing requirements; a full-time employee placed the orders. A controls engineer helped with programming, and I worked alongside them through integration and installation.</p></div>
        <figure className="case-study-hero-image"><img src={sitePath("/projects/gallery/clamp-close-iso.jpeg")} alt="Fabricated flange alignment gripper viewed from above"/><figcaption>The welded metal gripper assembly, designed to mount to the existing introducer.</figcaption></figure>
      </section>
      <nav className="case-study-contents" aria-label="On this page"><a href="#problem">01 / The problem</a><a href="#integration">02 / Mechanism</a><a href="#adjustment">03 / Adjustment</a><a href="#operation">04 / Testing</a><a href="#result">05 / Result</a></nav>
      <section className="case-study-section" id="problem">
        <div className="case-study-section-label"><span>01 / The problem</span><h2>Sideways movement. Off-center nails.</h2></div>
        <div className="case-study-body"><p>The existing introducer used a flat pusher. Wooden flanges could move left or right as they entered the nailer, leaving them off-center and causing off-center nails.</p><p>The solution was a clamp attached to the original introducer. It needed to hold the flange in position while still retracting below the table, just as the existing pusher did.</p></div>
      </section>
      <section className="case-study-section" id="integration">
        <div className="case-study-section-label"><span>02 / Mechanism</span><h2>One fixture. Three positions.</h2></div>
        <div className="case-study-body"><p>The mechanism needed three positions: recessed below the table, raised with the jaws open, and clamped around the flange. Inline cylinders beneath the fixture provide the staged vertical travel, while a separate cylinder actuates the upper jaw.</p>
          <ol className="case-study-positions" aria-label="Required gripper positions"><li><strong>Recessed</strong><span>The fixture retracts below table height.</span></li><li><strong>Open</strong><span>The fixture rises to receive the flange with the jaws open.</span></li><li><strong>Clamped</strong><span>The jaws close to hold the flange for introduction into the nailer.</span></li></ol>
          <p>I calculated the required clamping force to select the cylinder bores, sourced the components, then welded, assembled, and painted the fixture before mounting it to the existing pusher.</p>
          <figure><img src={sitePath("/projects/gallery/clamp-on-introducer.jpeg")} alt="Flange alignment gripper mounted on the existing introducer" loading="lazy"/><figcaption>The gripper installed on the introducer. This view shows its position within the existing equipment.</figcaption></figure>
        </div>
      </section>
      <section className="case-study-section" id="adjustment">
        <div className="case-study-section-label"><span>03 / Adjustment</span><h2>Build in room to fine-tune.</h2></div>
        <div className="case-study-body"><p>I did not have a CAD model of the existing equipment, so I measured the mounting points directly. Those measurements gave me a starting point, but the jaw position still needed to be adjustable during installation.</p><p>I designed a shim adjustment and 3D-printed shims labeled with their thicknesses. Adding or removing shims let me fine-tune the raised position so the jaws met the flange at the correct height.</p><div className="case-study-note"><strong>Design decision</strong><p>Make the mounting position adjustable before installation, so measured dimensions can be refined on the actual machine.</p></div></div>
      </section>
      <section className="case-study-section" id="operation">
        <div className="case-study-section-label"><span>04 / Installation & testing</span><h2>Fit and test on the machine.</h2></div>
        <div className="case-study-body"><p>Testing took place on installation day. The gripper performed the required motion, and the shim adjustment provided a way to fine-tune the jaw height on the actual equipment.</p><figure><video controls playsInline preload="none" poster={sitePath("/projects/gallery/clamp-on-introducer.jpeg")} aria-label="Flange alignment gripper operating on the nailer"><source src={sitePath("/projects/gallery/clamp-first-video.mp4")} type="video/mp4"/>Your browser does not support video playback.</video><figcaption>Operation footage of the pneumatic gripper on the production equipment.</figcaption></figure></div>
      </section>
      <section className="case-study-section" id="result">
        <div className="case-study-section-label"><span>05 / Result</span><h2>Installed in production.</h2></div>
        <div className="case-study-body"><div className="case-study-results"><div><strong>2</strong><span>Production lines</span></div><div><strong>3</strong><span>Shifts per day</span></div><div><strong>5</strong><span>Days per week</span></div></div><p>The gripper operates on two production lines, three shifts a day, five days a week.</p></div>
      </section>
      <footer className="case-study-footer"><a className="case-study-link" href={sitePath("/#work")}><ArrowLeft size={18}/> Explore more projects</a><a className="text-link" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a></footer>
    </div>
  </main>;
}
