import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dsv from '@rollup/plugin-dsv'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dsv(),],
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "src/public"),
    },
  },
  server: {
    port: process.env.VITE_REACT_APP_PORT // change here
  },  
 
})
