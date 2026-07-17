import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = repositoryName && repositoryName !== `${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
  ? `/${repositoryName}/`
  : "/";

export default defineConfig({
  base,
  plugins: [react()],
});
