import { mkdir, copyFile } from "node:fs/promises";

await mkdir("dist/projects", { recursive: true });
await copyFile("dist/index.html", "dist/projects/index.html");
