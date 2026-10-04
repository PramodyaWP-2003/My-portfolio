import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages project sites set base to '/<repo-name>/' (see README).
export default defineConfig({ base: '/', plugins: [react(), tailwindcss()] })
