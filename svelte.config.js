import path from "path";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import postcssPxToRem from "postcss-pxtorem";

const ifDev = process.env.NODE_ENV === "development";

// Deploy your site under a sub path
const basePath = ifDev ? "" : "/test";

// Deploy assets under a CDN or other
const assetsPath = ifDev ? "" : "https://res.ijunhai.com";
const appDir = ifDev ? "_app" : "wechat";

// Design draft
const designDraftWidth = 375;
const remRootValue = 16;

// proxy
const proxyTarget = ifDev
  ? "http://weixin-huodong.tesn20.com"
  : "https://activity.lagbug.com";

const adapter = ({ pages = "build", assets = pages, fallback }) => {
  return {
    name: "cnguu/svelte-adapter",
    async adapt({ utils }) {
      utils.rimraf(assets);
      utils.rimraf(pages);

      utils.copy_static_files(assets);
      utils.copy_client_files(assets);

      await utils.prerender({
        fallback,
        all: !fallback,
        dest: pages,
      });
    },
  };
};

const config = {
  kit: {
    target: "#app",
    paths: {
      base: basePath,
      assets: assetsPath,
    },
    appDir,
    adapter: adapter({
      pages: "dist",
      assets: "dist",
      fallback: null,
    }),
    vite: {
      define: {
        __BASE_URL__: JSON.stringify(`${basePath}/`),
        __DESIGN_DRAFT_WIDTH__: designDraftWidth,
        __REM_ROOT_VALUE__: remRootValue,
        __PROXY_TARGET__: JSON.stringify(proxyTarget),
      },
      resolve: {
        alias: {
          $assets: path.resolve("./src/assets"),
          $components: path.resolve("./src/components"),
          $configs: path.resolve("./src/configs"),
          $directives: path.resolve("./src/directives"),
          $plugins: path.resolve("./src/plugins"),
          $services: path.resolve("./src/services"),
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
          rootValue: remRootValue,
          unitPrecision: 5,
          propList: ["*"],
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
