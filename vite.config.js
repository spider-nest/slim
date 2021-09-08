import path from "path";

import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import mpa from "vite-plugin-mpa";

export default defineConfig({
  server: {
    host: true,
    port: 9527,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    target: "es2015",
    outDir: "dist",
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
      },
    },
    brotliSize: true,
    chunkSizeWarningLimit: 1024,
  },
  plugins: [
    svelte(),
    mpa({
      open: "/home",
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
