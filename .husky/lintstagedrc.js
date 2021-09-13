module.exports = {
  "*.js": ["eslint --fix", "prettier --write"],
  "{!(package)*.json,.!(browserslist)*rc}": ["prettier --write--parser json"],
  "package.json": ["prettier --write"],
  "*.svelte": ["eslint --fix", "prettier --write"],
  "*.{css,less,html}": ["prettier --write"],
  "*.md": ["prettier --write"],
};
