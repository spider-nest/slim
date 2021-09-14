module.exports = {
  "*.{js,svelte}": ["eslint --fix", "prettier --write"],
  "*.{less,css}": ["stylelint --fix", "prettier --write"],
};
