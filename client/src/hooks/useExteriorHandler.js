/* eslint-disable no-unused-vars */
import { useState, useRef, useCallback } from "react";

// 차량 Exterior 드래그에 따라 각도를 조절하는 hook
const useExteriorHandler = (degree, setDegree) => {
  const imgRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false); // Drag 상태 관리
  const [startX, setStartX] = useState(); // Drag 시작 위치 관리
  const [throttle, setThrottle] = useState(0); // Throttle 상태 관리

  // Drag 시작
  const handleDragStart = (e) => {
    e.preventDefault(); // 기본 동작 방지
    setIsDragging(true); // Drag 상태 설정
    setStartX(e.pageX || e.touches[0].pageX); // Drag 시작 위치 설정
  };

  // Drag 종료
  const handleDragEnd = () => {
    setIsDragging(false); // Drag 상태 해제
  };

  // Drag 이동
  const handleDragMove = useCallback(
    (e) => {
      if (isDragging) {
        const pageX = e.pageX || e.touches[0].pageX;

        const { scrollWidth, clientWidth, scrollLeft } = imgRef.current;
        // 스크롤 위치에 따라 시작 위치 재설정
        if (scrollLeft === 0) {
          setStartX(pageX);
        } else if (scrollWidth < clientWidth + scrollLeft) {
          setStartX(pageX + scrollLeft);
        }

        // 왼쪽으로 Drag 시
        if (startX - pageX > 0) {
          setThrottle((prevThrottle) => {
            // Throttle 체크 후 각도 증가
            if (prevThrottle + 1 === 8) {
              setDegree((prevDegree) =>
                prevDegree === 36 ? 1 : prevDegree + 1
              );
              return 0;
            }
            return prevThrottle + 1;
          });
          // 오른쪽으로 Drag 시
        } else if (startX - pageX < 0) {
          setThrottle((prevThrottle) => {
            // Throttle 체크 후 각도 감소
            if (prevThrottle + 1 === 8) {
              setDegree((prevDegree) =>
                prevDegree === 1 ? 36 : prevDegree - 1
              );
              return 0;
            }
            return prevThrottle + 1;
          });
        }
      }
    },
    [isDragging, startX, setDegree]
  );

  // 모바일 터치 이벤트 핸들러 추가
  const handleTouchStart = (e) => handleDragStart(e);
  const handleTouchMove = (e) => handleDragMove(e);
  const handleTouchEnd = () => handleDragEnd();

  return {
    imgRef,
    handleDragStart,
    handleDragEnd,
    handleDragMove,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useExteriorHandler;
