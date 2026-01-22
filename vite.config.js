import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react],

  // client = yashaskarne.github.io (root domain)
  // me = amansethiya.github.io/yashas-portfolio-web
  base: mode === "client" ? "/" : "/yashas-portfolio-web/",
}));
