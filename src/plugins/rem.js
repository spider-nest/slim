import { designDraftWidth } from "$configs/app";

const setRem = () => {
  const scale = document.documentElement.clientWidth / designDraftWidth;
  document.documentElement.style.fontSize =
    (designDraftWidth / 20) * Math.min(scale, 2) + "px";
};

const handleRem = () => {
  setRem();
  window.onresize = () => {
    setRem();
  };
  window.onpageshow = (event) => {
    if (event.persisted) {
      setRem();
    }
  };
};

export default handleRem;
