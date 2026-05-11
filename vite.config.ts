import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/project3-Tonypepproni/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  css: {
    transformer: 'postcss',
  },
})