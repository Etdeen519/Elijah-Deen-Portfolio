import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import { sitePath } from "../app/site-path";
import "../app/globals.css";

const isProjects = window.location.pathname.replace(/\/$/, "").endsWith("/projects");
if (isProjects) {
  const project = new URLSearchParams(window.location.search).get("project");
  const destination = sitePath("/") + (project ? `?project=${encodeURIComponent(project)}` : "") + "#work";
  window.history.replaceState(null, "", destination);
  requestAnimationFrame(() => document.getElementById("work")?.scrollIntoView());
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode><Home /></React.StrictMode>
);
