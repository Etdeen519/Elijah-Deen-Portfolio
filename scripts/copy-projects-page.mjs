import { mkdir, copyFile, readFile, writeFile } from "node:fs/promises";

await mkdir("dist/projects", { recursive: true });
await copyFile("dist/index.html", "dist/projects/index.html");
await mkdir("dist/projects/flange-alignment-gripper-tool", { recursive: true });
const caseStudyHtml = (await readFile("dist/index.html", "utf8"))
  .replace("Elijah Deen | Mechanical Engineering Portfolio", "Flange Alignment Gripper Tool | Elijah Deen")
  .replace('content="Mechanical engineering portfolio featuring machine design, robotics, manufacturing, and hands-on prototyping work."', 'content="Design, fabrication, and installation of a pneumatic flange alignment gripper for two Sonoco production lines."');
await writeFile("dist/projects/flange-alignment-gripper-tool/index.html", caseStudyHtml);
