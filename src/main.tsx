import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import Projects from "../app/projects/page";
import "../app/globals.css";

const isProjects = window.location.pathname.replace(/\/$/, "").endsWith("/projects");
if (isProjects) document.title = "Projects | Elijah Deen";
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{isProjects ? <Projects /> : <Home />}</React.StrictMode>
);
