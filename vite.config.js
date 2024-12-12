import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/CaseGuard_Frontend_Assessment",
  plugins: [react()],
})
