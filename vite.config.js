import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base:
    mode === "client"
      ? "/" // yashaskarne.github.io
      : "/yashas-portfolio-web/", // amansethiya.github.io
}));
