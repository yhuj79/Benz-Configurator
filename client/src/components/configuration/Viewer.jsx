import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

import Caution from "./Caution";

import useExteriorHandler from "../../hooks/useExteriorHandler";
import {
  exteriorImageUrl,
  interiorImageUrl,
} from "../../utils/generateImageUrl";

// Configuration Page 차량 Viewer 컴포넌트
function Viewer({ viewMode }) {
  // Redux Store 상태값 반환 (차량 옵션)
  const { name, styling, paint, wheels, seats, trim, steering } = useSelector(
    (state) => state.options
  );

  // 차량 Exterior 각도 상태 관리
  const [degree, setDegree] = useState(1);
  const {
    imgRef,
    handleDragStart,
    handleDragEnd,
    handleDragMove,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useExteriorHandler(degree, setDegree);

  const swiperRef = useRef(null);

  // viewMode에 따라 이미지 변경
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (viewMode === "exterior") {
        swiperRef.current.swiper.slideTo(0);
      } else if (viewMode === "interior-seats") {
        swiperRef.current.swiper.slideTo(1);
      } else if (viewMode === "interior-front") {
        swiperRef.current.swiper.slideTo(2);
      }
    }
  }, [viewMode]);

  return (
    <div className="sm:relative top-0 sm:top-auto z-20 sticky border-md-gray border-b-2 sm:border-b-0 w-full h-full overflow-hidden">
      <Caution />
      <Swiper
        ref={swiperRef}
        modules={[EffectFade]}
        effect="fade"
        allowTouchMove={false}
        navigation={false}
        pagination={false}
        className="flex justify-center items-center w-full h-full transform transition duration-300 overflow-hidden"
      >
        <SwiperSlide>
          <img
            alt="background"
            src="https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/viewer/background.webp"
            className="top-0 brightness-95 left-0 z-10 absolute w-full h-full object-cover"
          />
          <div className="relative z-20 flex justify-center items-center w-full h-full cursor-ew-resize">
            <img
              alt="exterior"
              src={exteriorImageUrl(name, styling, paint, wheels, degree)}
              ref={imgRef}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative z-11 pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-13 xl:pl-11"
            />
            <img
              alt="slider-stage"
              src="https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/viewer/sliderstage.webp"
              className="z-10 absolute px-5 w-full pointer-events-none"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="interior-seats"
            src={interiorImageUrl(name, seats, trim, steering, "s")}
            className="relative z-10 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="interior-front"
            src={interiorImageUrl(name, seats, trim, steering, "f")}
            className="relative z-10 w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Viewer;
