import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  base: '/site-orbit/',  // 👈 CORRETO para GitHub Pages
  plugins: [
    react(),
    componentTagger(),    // 👈 Só se você realmente estiver usando o Lovable Tagger, senão pode remover
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    open: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
