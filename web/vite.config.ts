import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      external: ['@vitejs/plugin-legacy'],
    },
  },
  server: {
    port: 3333
  }
})
