import { designDraftWidth, remRootValue } from "$configs/app";

const setRem = () => {
  let ww = document.documentElement.clientWidth;
  ww = ww > 677 ? (designDraftWidth / 2) * 3 : ww;
  ww = ww <= 320 ? 320 : ww;
  document.documentElement.style.fontSize =
    ww / (designDraftWidth / remRootValue) + "px";
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
