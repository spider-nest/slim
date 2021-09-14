import path from "path";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import postcssPxToRem from "postcss-pxtorem";

const config = {
  kit: {
    target: "#app",
    vite: {
      resolve: {
        alias: {
          $assets: path.resolve("./src/assets"),
          $components: path.resolve("./src/components"),
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
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
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
