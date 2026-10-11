import { sitePath } from "../site-path";
import { ArrowLeft, Download } from "lucide-react";
import ThemeToggle from "../theme-toggle";
import ProjectCarousel from "./project-carousel";

export const projects = [
  {
    title: "Robotic Nailer Clamp",
    organization: "Sonoco · 2026",
    category: "Machine Design",
    description: "Developing a compact pneumatic clamp that aligns uneven wooden reel flanges as they enter an automated nailer.",
    skills: ["Inventor", "Pneumatics", "FEA"],
    result: "IN PROGRESS",
    resultLabel: "±0.1 in alignment target",
    images: [],
  },
  {
    title: "Rear Axle Truck Scale",
    organization: "Sonoco · 2026",
    category: "Process Improvement",
    description: "Designed and fabricated a four-bar platform that constrains motion and transfers trailer axle load into a load cell.",
    skills: ["Machine Design", "Welding", "Testing"],
    result: "$34.5K",
    resultLabel: "projected annual savings",
    image: sitePath("/projects/truck-scale.png"),
    alt: "CAD model of the rear axle truck scale",
    images: [{src:sitePath("/projects/truck-scale.png"),alt:"CAD model of the rear axle truck scale"},{src:sitePath("/projects/gallery/truck-assembly.png"),alt:"Full assembly CAD model of the truck scale"},{src:sitePath("/projects/gallery/truck-linkage.png"),alt:"Exploded view of the truck scale linkage"}],
  },
  {
    title: "Half Stacker",
    organization: "Sonoco · 2026",
    category: "Fabrication",
    description: "Built a fixture that contains partial lumber bundles while preserving forklift access, then added an adjustable support for narrow loads.",
    skills: ["Design", "Fabrication", "Operator Feedback"],
    result: "69%",
    resultLabel: "estimated time reduction",
    image: sitePath("/projects/half-stacker.jpg"),
    alt: "Half stacker holding a bundle of lumber",
    images: [{src:sitePath("/projects/half-stacker.jpg"),alt:"Half stacker holding a bundle of lumber"}],
  },
  {
    title: "Bandsaw Dust Collection",
    organization: "Sonoco · 2026",
    category: "Process Improvement",
    description: "Combined vacuum capture with directed blower air, using successive prototypes to control dust at the blade.",
    skills: ["Airflow", "Rapid Prototyping", "Sheet Metal"],
    result: "4 BUILDS",
    resultLabel: "concept through final geometry",
    image: sitePath("/projects/bandsaw-collector.jpg"),
    alt: "Fabricated bandsaw dust collection prototype",
    images: [{src:sitePath("/projects/bandsaw-collector.jpg"),alt:"Fabricated bandsaw dust collection prototype"},{src:sitePath("/projects/gallery/bandsaw-on-machine.jpg"),alt:"Dust collection prototype mounted on the bandsaw"},{src:sitePath("/projects/gallery/bandsaw-easy-prototype.png"),alt:"Easy to fabricate nozzle prototype design"},{src:sitePath("/projects/gallery/bandsaw-test.mp4"),alt:"Bandsaw dust collection test video",video:true}],
  },
  {
    title: "Repair Turntable",
    organization: "Sonoco · 2026",
    category: "Machine Design",
    description: "Designed and installed a retractable pneumatic lift and free-spinning turntable so one operator can reposition large wooden flanges.",
    skills: ["Inventor", "Pneumatics", "Fabrication"],
    result: "750 LB",
    resultLabel: "design capacity",
    image: sitePath("/projects/repair-turntable.jpg"),
    alt: "Fabricated repair turntable",
    images: [{src:sitePath("/projects/repair-turntable.jpg"),alt:"Fabricated repair turntable"},{src:sitePath("/projects/gallery/turntable-installed.jpg"),alt:"Repair turntable installed on the production line"},{src:sitePath("/projects/gallery/turntable-drawing.png"),alt:"Assembly drawing of the repair turntable"}],
  },
  {
    title: "Integrated Motor Conveyor",
    organization: "VEX Robotics · 2025",
    category: "Product Development",
    description: "Redesigned the V5 Workcell conveyor to package its motor and gearbox inside a housing suited to production assembly.",
    skills: ["SolidWorks", "DFM", "DFA"],
    result: "3 PARTS",
    resultLabel: "injection-moldable housing",
    image: sitePath("/projects/linear-conveyor.jpg"),
    alt: "Completed VEX linear conveyor prototype",
    images: [{src:sitePath("/projects/linear-conveyor.jpg"),alt:"Completed VEX linear conveyor prototype"},{src:sitePath("/projects/gallery/conveyor-original.jpg"),alt:"Original linear conveyor design"},{src:sitePath("/projects/gallery/conveyor-cad.png"),alt:"Collapsed CAD view of the linear conveyor"},{src:sitePath("/projects/gallery/conveyor-exploded.png"),alt:"Exploded CAD view of the linear conveyor"},{src:sitePath("/assembly-timelapse.mp4"),alt:"Time lapse of Elijah assembling the conveyor",video:true}],
  },
  {
    title: "Inclined Conveyor",
    organization: "VEX Robotics · 2025",
    category: "Product Development",
    description: "Created a multilevel conveyor add-on with a smooth inverted-belt handoff, retaining fins, and reinforced belt links.",
    skills: ["Prototyping", "Mechanism Design", "Testing"],
    result: "TESTED",
    resultLabel: "reliable cargo handoff",
    image: sitePath("/projects/inclined-conveyor.jpg"),
    alt: "Prototype of the VEX inclined conveyor",
    images: [{src:sitePath("/projects/inclined-conveyor.jpg"),alt:"Prototype of the VEX inclined conveyor"},{src:sitePath("/projects/gallery/inclined-conveyor-video.mp4"),alt:"Inclined conveyor prototype running",video:true}],
  },
  {
    title: "Pulsating Heat Exchanger",
    organization: "Texas A&M · 2026",
    category: "Capstone",
    description: "Designed the CAD model for a refrigeration test rig that measures how pulsating flow affects heat-transfer performance.",
    skills: ["Thermal Systems", "CAD", "Design for Testing"],
    result: "CAPSTONE",
    resultLabel: "fabrication-ready lab setup",
    image: sitePath("/projects/heat-exchanger.png"),
    alt: "Isometric CAD view of the heat exchanger lab setup",
    images: [{src:sitePath("/projects/heat-exchanger.png"),alt:"Isometric CAD view of the heat exchanger lab setup"},{src:sitePath("/projects/gallery/heat-top.png"),alt:"Top view diagram of the heat exchanger lab setup"},{src:sitePath("/projects/gallery/heat-testing-section.png"),alt:"Section view of the testing setup"},{src:sitePath("/projects/gallery/heat-concept.png"),alt:"Concept diagram of the pulsating heat exchanger"}],
  },
  {
    title: "Scissor Lift",
    organization: "Texas A&M",
    category: "Machine Design",
    description: "Designed a compact scissor lift and evaluated the structure to minimize deflection under load.",
    skills: ["SolidWorks", "Structural Design", "Drawings"],
    result: "ANALYZED",
    resultLabel: "extended and collapsed states",
    image: sitePath("/projects/scissor-lift.png"),
    alt: "CAD model of the scissor lift",
    images: [{src:sitePath("/projects/scissor-lift.png"),alt:"CAD model of the scissor lift"},{src:sitePath("/projects/gallery/scissor-pan.mp4"),alt:"Scissor lift CAD pan video",video:true}],
  },
  {
    title: "Snapper Combat Robot",
    organization: "Turtle Robotics · 2025",
    category: "Robotics",
    description: "Helped design and build a three-pound combat robot with a vertical spinner and controlling forks for competition.",
    skills: ["Systems Integration", "Fabrication", "Iteration"],
    result: "3 LB",
    resultLabel: "combat robot",
    image: sitePath("/projects/combat-robot.png"),
    alt: "Isometric concept view of the Snapper combat robot",
    images: [{src:sitePath("/projects/combat-robot.png"),alt:"Isometric concept view of the Snapper combat robot"},{src:sitePath("/projects/gallery/combat-controls.png"),alt:"Concept controls view of the Snapper robot"},{src:sitePath("/projects/gallery/combat-team.jpg"),alt:"Turtle Robotics team and robot parts"}],
  },
  {
    title: "FRC 3310 Climber",
    organization: "Black Hawk Robotics · 2022",
    category: "Robotics",
    description: "Designed the third stage of a telescoping climbing mechanism and supported competition operations as pit captain.",
    skills: ["SolidWorks", "Machining", "3D Printing"],
    result: "PIT CAPTAIN",
    resultLabel: "climber design role",
    images: [],
  },
];

export default function ProjectsPage() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href={sitePath("/")} aria-label="Elijah Deen, home">ED<span>/</span>ME</a>
      <nav aria-label="Project navigation"><a href={sitePath("/")}>Home</a><a href={sitePath("/#experience")}>Experience</a><a href={sitePath("/#about")}>About</a></nav>
      <div className="header-actions"><ThemeToggle/><a className="header-cta" href={sitePath("/Elijah-Deen-Resume.pdf")} target="_blank" rel="noreferrer">Resume <Download size={16}/></a></div>
    </header>

    <section className="projects-hero">
      <a className="back-link" href={sitePath("/")}><ArrowLeft size={16}/> Back home</a>
      <p className="eyebrow"><span/> Engineering work</p>
      <h1>Projects.</h1>
      <p>Machine design, manufacturing, robotics, and coursework. Browse one project at a time, then flip through its images.</p>
    </section>

    <ProjectCarousel projects={projects}/>

    <div className="archive-end"><a href={sitePath("/")}><ArrowLeft size={16}/> Return home</a><span>ELIJAH T. DEEN · 2026</span></div>
  </main>;
}
