import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import ProjectsPage from "../app/projects/page";
import "../app/globals.css";

const isProjects = window.location.pathname.replace(/\/$/, "").endsWith("/projects");
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{isProjects ? <ProjectsPage /> : <Home />}</React.StrictMode>
);
