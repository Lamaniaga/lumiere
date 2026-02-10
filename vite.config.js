import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        doctors: resolve(__dirname, 'doctors.html'),
        // Tambahkan results di sini sekalian agar nanti tidak 404 lagi
        results: resolve(__dirname, 'results.html'), 
      },
    },
  },
})