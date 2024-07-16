import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 페이지 이동 시 스크롤을 맨 위로 이동시키는 hook
export default function useScrollToTop(props) {
  const { pathname } = useLocation(); // 현재 경로 가져오기

  useEffect(() => {
    window.scrollTo(0, 0); // 경로 변경 시 scroll 맨 위로 이동
  }, [pathname]); // 경로가 변경될 때마다 실행

  return <>{props.children}</>; // children component rendering
}
