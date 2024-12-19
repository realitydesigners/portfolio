import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://raymondreamer.com",
  integrations: [
    mdx(),
    sitemap(),
    react({
      include: ["**/*.{jsx,tsx}"],
      experimentalReactChildren: true,
      experimentalReact19: true,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["react-dom"],
    },
    optimizeDeps: {
      include: ["react", "react-dom"],
      exclude: ["@astrojs/react"],
    },
    css: {
      postcss: true,
    },
  },
});
