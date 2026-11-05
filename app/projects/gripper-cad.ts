import { sitePath } from "../site-path";

export const gripperAssembly = { src: sitePath("/projects/gallery/clamp-cad-assembly.jpg"), alt: "CAD overview of the gripper mounted to the introducer", caption: "Gripper and introducer assembly." };
export const gripperPositions = [
  { src: sitePath("/projects/gallery/clamp-cad-recessed.jpg"), alt: "CAD view of the gripper in its recessed configuration", caption: "Recessed", detail: "Retracted below the table." },
  { src: sitePath("/projects/gallery/clamp-cad-open.jpg"), alt: "CAD view of the gripper with its jaws open", caption: "Open", detail: "Raised to receive the flange." },
  { src: sitePath("/projects/gallery/clamp-cad-closed.jpg"), alt: "CAD view of the gripper with its jaws closed", caption: "Closed", detail: "Jaws positioned to grip the flange." },
];
export const gripperDetails = [
  { src: sitePath("/projects/gallery/clamp-cad-manifold.jpg"), alt: "CAD view of the pneumatic manifold and control components", caption: "Pneumatic manifold and controls." },
  { src: sitePath("/projects/gallery/clamp-cad-inline-cylinders.jpg"), alt: "CAD detail of the inline cylinders and adjustable spacers", caption: "Inline cylinders with adjustable spacers." },
];
export const gripperCadMedia = [gripperAssembly, ...gripperPositions, ...gripperDetails];
