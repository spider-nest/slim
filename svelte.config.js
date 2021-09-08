const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  legacy: true,
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [require("autoprefixer")()],
    },
  }),
};
