import path from "path";

import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import mpa from "vite-plugin-mpa";

export default ({ mode }) => {
  const root = process.cwd();
  const { VITE_BASE_URL } = loadEnv(mode, root);
  return defineConfig({
    server: {
      host: true,
      port: 9527,
      strictPort: true,
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
      assetsDir: "assets",
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      sourcemap: false,
      minify: "terser",
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
        },
      },
      brotliSize: true,
      chunkSizeWarningLimit: 512,
    },
    root,
    base: VITE_BASE_URL,
    plugins: [
      svelte(),
      mpa({
        open: "/home",
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^@/,
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
};
