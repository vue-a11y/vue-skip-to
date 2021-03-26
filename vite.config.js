const path = require('path')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({ isProduction: true })
  ],
  build: {
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src'),
      name: 'VueSkipTo',
      formats: ['esm', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
