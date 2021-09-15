import path from "path";
import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import postcssPxToRem from "postcss-pxtorem";

const ifDev = process.env.NODE_ENV === "development";

// Deploy your site under a sub path
const basePath = ifDev ? "" : "/test";
// Deploy assets under a CDN or other
const assetsPath = ifDev ? "" : "https://res.ijunhai.com";
const appDir = ifDev ? "_app" : "wechat";

const config = {
  kit: {
    target: "#app",
    paths: {
      base: basePath,
      assets: assetsPath,
    },
    appDir,
    adapter: adapter({
      pages: ".svelte-kit/static",
      assets: ".svelte-kit/static/assets",
      fallback: null,
    }),
    vite: {
      define: {
        __BASE_URL__: JSON.stringify(`${basePath}/`),
      },
      resolve: {
        alias: {
          $assets: path.resolve("./src/assets"),
          $components: path.resolve("./src/components"),
          $configs: path.resolve("./src/configs"),
          $directives: path.resolve("./src/directives"),
          $styles: path.resolve("./src/styles"),
          $utils: path.resolve("./src/utils"),
        },
      },
    },
  },
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPxToRem({
          rootValue: 16, // Design draft 320/20
          unitPrecision: 5,
          propList: [
            "font",
            "font-size",
            "letter-spacing",
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "line-height",
            "background-size",
          ],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          exclude: /node_modules/i,
        }),
      ],
    },
  }),
};

export default config;
