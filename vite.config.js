// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // agar path-nya relatif
  build: {
    outDir: 'docs' // hasil build ke folder 'docs'
  }
})
