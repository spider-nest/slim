const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  legacy: true,
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [
        require("autoprefixer")(),
        require("postcss-pxtorem")({
          rootValue: 37.5, // 设计稿 750/20
          unitPrecision: 5,
          propList: ["font", "font-size", "line-height", "letter-spacing"],
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
