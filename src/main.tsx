import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import ProjectsPage from "../app/projects/page";
import GripperCaseStudy from "../app/projects/gripper-case-study";
import "../app/globals.css";

const isProjects = window.location.pathname.replace(/\/$/, "").endsWith("/projects");
const isGripper = window.location.pathname.replace(/\/$/, "").endsWith("/projects/flange-alignment-gripper-tool");
if (isGripper) {
  document.title = "Flange Alignment Gripper Tool | Elijah Deen";
  document.querySelector('meta[name="description"]')?.setAttribute("content", "Design, fabrication, and installation of a pneumatic flange alignment gripper for two Sonoco production lines.");
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{isGripper ? <GripperCaseStudy /> : isProjects ? <ProjectsPage /> : <Home />}</React.StrictMode>
);
