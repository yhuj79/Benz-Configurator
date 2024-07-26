// Scroll Event 제어
// 스크롤바를 유지하면서 스크롤을 중지하기 위해 overflow hidden 대신 EventListener 사용
const preventDefault = (e) => {
  e.preventDefault();
};

const preventDefaultForScrollKeys = (e) => {
  if (
    ["ArrowUp", "ArrowDown", "Space", "PageUp", "PageDown"].includes(e.code)
  ) {
    e.preventDefault();
  }
};

export function disableScroll() {
  window.addEventListener("wheel", preventDefault, { passive: false });
  window.addEventListener("touchmove", preventDefault, { passive: false });
  window.addEventListener("keydown", preventDefaultForScrollKeys, {
    passive: false,
  });
}

export function enableScroll() {
  window.removeEventListener("wheel", preventDefault, { passive: false });
  window.removeEventListener("touchmove", preventDefault, { passive: false });
  window.removeEventListener("keydown", preventDefaultForScrollKeys, {
    passive: false,
  });
}
