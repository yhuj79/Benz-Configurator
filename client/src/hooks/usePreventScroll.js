import { useEffect } from "react";

// 스크롤 시 의도치 않게 특정 요소가 확대, 축소되는 현상 방지
const usePreventScroll = (elementId) => {
  useEffect(() => {
    const element = document.getElementById(elementId);

    if (element) {
      const handleWheel = (event) => {
        event.stopPropagation();
      };

      // wheel event가 다른 요소로 전파되기 전에 stopPropagation에 의해 중단
      element.addEventListener("wheel", handleWheel);

      // 언마운트 될 때, wheel event listener 제거
      return () => {
        element.removeEventListener("wheel", handleWheel);
      };
    }
  }, [elementId]);
};

export default usePreventScroll;
