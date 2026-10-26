import { sitePath } from "../site-path";
import { ArrowLeft, Download } from "lucide-react";
import ThemeToggle from "../theme-toggle";
import ProjectCarousel from "./project-carousel";



export const projects = [ /* video-first-projects */
  {
    title: "Flange Alignment Gripper Tool",
    organization: "Sonoco · 2026",
    category: "Machine Design",
    description: "Designed, fabricated, and installed a pneumatic gripper to keep wooden flanges aligned as they enter the nailer. It mounts to the existing pusher and operates on two production lines, three shifts a day, five days a week.",
    skills: ["Inventor", "Pneumatics", "FEA"],
    result: "2 LINES",
    resultLabel: "installed in production",
    images: [{src:sitePath("/projects/gallery/clamp-first-video.mp4"),alt:"Automated nailer clamp operation video",video:true},{src:sitePath("/projects/gallery/clamp-close-iso.jpeg"),alt:"Fabricated automated nailer clamp from above"},{src:sitePath("/projects/gallery/clamp-on-introducer.jpeg"),alt:"Automated nailer clamp installed on the introducer"},{src:sitePath("/projects/gallery/clamp-portrait.mp4"),alt:"Short portrait video of the automated nailer clamp",video:true}],
  },
  {
    title: "Integrated Motor Conveyor",
    organization: "VEX Robotics · 2025",
    category: "Product Development",
    description: "Redesigned the VEX V5 Workcell conveyor to fit its motor, gears, and controller inside a three-part housing intended for injection molding. I built several 3D-printed iterations to work through gear spacing, shaft support, and assembly.",
    skills: ["SolidWorks", "DFM", "DFA"],
    result: "3 PARTS",
    resultLabel: "injection-moldable housing",
    image: sitePath("/projects/linear-conveyor.jpg"),
    alt: "Completed VEX linear conveyor prototype",
    images: [{src:sitePath("/assembly-timelapse.mp4"),alt:"Time lapse of Elijah assembling the conveyor",video:true},{src:sitePath("/projects/linear-conveyor.jpg"),alt:"Completed VEX linear conveyor prototype"},{src:sitePath("/projects/gallery/conveyor-original.jpg"),alt:"Original linear conveyor design"},{src:sitePath("/projects/gallery/conveyor-cad.png"),alt:"Collapsed CAD view of the linear conveyor"},{src:sitePath("/projects/gallery/conveyor-exploded.png"),alt:"Exploded CAD view of the linear conveyor"}],
  },
  {
    title: "Rear Axle Truck Scale",
    organization: "Sonoco · 2026",
    category: "Process Improvement",
    description: "Designed and began fabricating a scale to weigh sawdust trucks before dispatch. The project was left incomplete, but the work taught me to account for purchasing lead times, movement in large steel assemblies, and structural loads earlier in the design.",
    skills: ["Machine Design", "Welding", "Testing"],
    result: "INCOMPLETE",
    resultLabel: "design and fabrication work",
    image: sitePath("/projects/truck-scale.png"),
    alt: "CAD model of the rear axle truck scale",
    images: [{src:sitePath("/projects/truck-scale.png"),alt:"CAD model of the rear axle truck scale"},{src:sitePath("/projects/gallery/truck-assembly.png"),alt:"Full assembly CAD model of the truck scale"},{src:sitePath("/projects/gallery/truck-linkage.png"),alt:"Exploded view of the truck scale linkage"}],
  },
  {
    title: "Holtec Lumber Frame for Rebundling",
    organization: "Sonoco · 2026",
    category: "Fabrication",
    description: "Designed and built a frame for restacking partial lumber bundles. It reduced rebundling time from eight minutes to two and a half minutes, improved operator safety, and eliminated dropped bundles.",
    skills: ["Design", "Fabrication", "Operator Feedback"],
    result: "8 → 2.5 MIN",
    resultLabel: "rebundling time",
    image: sitePath("/projects/half-stacker.jpg"),
    alt: "Half stacker holding a bundle of lumber",
    images: [{src:sitePath("/projects/half-stacker.jpg"),alt:"Half stacker holding a bundle of lumber"}],
  },
  {
    title: "Bandsaw Dust Collection",
    organization: "Sonoco · 2026",
    category: "Process Improvement",
    description: "Built and tested a series of prototypes that paired a vacuum nozzle with a blower. The blower countered sawdust carried along by the moving blade, allowing the nozzle to capture it near the cut. The project reached a working concept.",
    skills: ["Airflow", "Rapid Prototyping", "Sheet Metal"],
    result: "WORKING CONCEPT",
    resultLabel: "tested with rapid prototypes",
    image: sitePath("/projects/bandsaw-collector.jpg"),
    alt: "Fabricated bandsaw dust collection prototype",
    images: [{src:sitePath("/projects/gallery/bandsaw-test.mp4"),alt:"Bandsaw dust collection test video",video:true},{src:sitePath("/projects/bandsaw-collector.jpg"),alt:"Fabricated bandsaw dust collection prototype"},{src:sitePath("/projects/gallery/bandsaw-on-machine.jpg"),alt:"Dust collection prototype mounted on the bandsaw"},{src:sitePath("/projects/gallery/bandsaw-easy-prototype.png"),alt:"Easy to fabricate nozzle prototype design"}],
  },
  {
    title: "Repair Turntable",
    organization: "Sonoco · 2026",
    category: "Machine Design",
    description: "Designed and installed a retractable pneumatic lift and turntable for repairing wooden flanges weighing up to 750 lb. Operators can reposition a flange without lifting it; repair time was cut in half, and the task went from three people to one.",
    skills: ["Inventor", "Pneumatics", "Fabrication"],
    result: "750 LB",
    resultLabel: "design capacity",
    image: sitePath("/projects/repair-turntable.jpg"),
    alt: "Fabricated repair turntable",
    images: [{src:sitePath("/projects/repair-turntable.jpg"),alt:"Fabricated repair turntable"},{src:sitePath("/projects/gallery/turntable-installed.jpg"),alt:"Repair turntable installed on the production line"},{src:sitePath("/projects/gallery/turntable-drawing.png"),alt:"Assembly drawing of the repair turntable"}],
  },

  {
    title: "Inclined Conveyor",
    organization: "VEX Robotics · 2025",
    category: "Product Development",
    description: "Built a prototype to move parts between levels of a VEX V5 Workcell. An inverted belt handoff feeds parts onto a reinforced TPU belt with fins that carries them up the incline.",
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
    description: "Created the CAD model of a refrigeration test rig for my capstone team's study of pulsating flow and heat transfer. I laid out the sensor locations and fluid development regions needed for the planned measurements.",
    skills: ["Thermal Systems", "CAD", "Design for Testing"],
    result: "CAPSTONE",
    resultLabel: "refrigeration test rig CAD",
    image: sitePath("/projects/heat-exchanger.png"),
    alt: "Isometric CAD view of the heat exchanger lab setup",
    images: [{src:sitePath("/projects/heat-exchanger.png"),alt:"Isometric CAD view of the heat exchanger lab setup"},{src:sitePath("/projects/gallery/heat-top.png"),alt:"Top view diagram of the heat exchanger lab setup"},{src:sitePath("/projects/gallery/heat-testing-section.png"),alt:"Section view of the testing setup"},{src:sitePath("/projects/gallery/heat-concept.png"),alt:"Concept diagram of the pulsating heat exchanger"}],
  },
  {
    title: "Scissor Lift",
    organization: "Texas A&M",
    category: "Machine Design",
    description: "Designed, built, and tested a compact scissor lift for MEEN 361, Materials and Manufacturing in Design Laboratory.",
    skills: ["SolidWorks", "Structural Design", "Drawings"],
    result: "BUILT & TESTED",
    resultLabel: "MEEN 361 project",
    image: sitePath("/projects/scissor-lift.png"),
    alt: "CAD model of the scissor lift",
    images: [{src:sitePath("/projects/gallery/scissor-pan.mp4"),alt:"Scissor lift CAD pan video",video:true},{src:sitePath("/projects/scissor-lift.png"),alt:"CAD model of the scissor lift"}],
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
