import Clipboard from "$plugins/clipboard";

const copyText = (node, text) => {
  return new Promise((resolve, reject) => {
    const fakeElement = document.createElement("button");
    const instance = new Clipboard(fakeElement, {
      text: () => text,
      action: () => "copy",
      container: node,
    });
    instance.on("success", (event) => {
      instance.destroy();
      resolve(event);
    });
    instance.on("error", (event) => {
      instance.destroy();
      reject(event);
    });
    fakeElement.click();
  });
};

export default function clipboard(node, { text = "", handler = () => {} }) {
  const onClick = async () => {
    await copyText(node, text);
    handler();
  };

  node.addEventListener("click", onClick);

  return {
    destroy() {
      node.removeEventListener("click", onClick);
    },
  };
}
