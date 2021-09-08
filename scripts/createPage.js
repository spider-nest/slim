const path = require("path");
const fs = require("fs-extra");

const baseName = process.argv[2];
if (!baseName) {
  console.log("[error]: 请指定名称");
  process.exit(0);
}

const pageName = `${baseName}`;
const src = path.join(process.cwd(), "/src");
const pageDir = path.join(src, `pages/${pageName}`);
const tmplDir = path.join(process.cwd(), "/template");

fs.pathExists(pageDir).then((pathExists) => {
  if (pathExists) {
    console.log("[warn]: 目录已存在，跳过创建");
  } else {
    fs.copy(tmplDir, pageDir)
      .then(() => {
        console.log(`[success]: 目录 ${pageName} 创建成功`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
