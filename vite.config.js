import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If the site is served from https://ch190004-blip.github.io/chatpgt/
// set base to '/chatpgt/' so built assets use the correct subpath.
export default defineConfig({
  base: '/chatpgt/',
  plugins: [react()],
})
