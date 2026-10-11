import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const base = process.env.SITE_BASE_PATH || (repo && !repo.endsWith(".github.io") ? `/${repo}/` : "/");

export default defineConfig({
  plugins: [react()],
  base,
  build: { outDir: "dist" },
});
