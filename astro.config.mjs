// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isDev = import.meta.env.DEV;
const base = isDev ? "/" : "/project-menu/";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  base,
});
