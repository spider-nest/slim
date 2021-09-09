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

fs.pathExists(pageDir).then((pathExists) => {
  if (pathExists) {
    fs.remove(pageDir)
      .then(() => {
        console.log(`[success]: 目录 ${pageName} 删除成功`);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log("[warn]: 目录不存在，跳过删除");
  }
});
