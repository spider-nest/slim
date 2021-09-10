const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  legacy: true,
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [
        require("autoprefixer")(),
        require("postcss-pxtorem")({
          rootValue: 16, // 设计稿 320/20
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
