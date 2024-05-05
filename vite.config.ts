import path from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import dsv from '@rollup/plugin-dsv'

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(import.meta.dirname, './src')
    }
  },
  plugins: [
    solidPlugin(),
    dsv(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'docs'
  },
  base: ''
})
