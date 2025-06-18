import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/', // Corrige preview e deploy na Vercel
  plugins: [
    react(),
    componentTagger() // Mantenha isso apenas se realmente estiver usando o lovable-tagger
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Atalho para importar de src
    }
  },
  build: {
    outDir: 'dist' // Garante que o build vá para a pasta que a Vercel espera
  }
})