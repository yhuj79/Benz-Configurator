import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

import useExteriorHandler from "../../hooks/useExteriorHandler";
import {
  exteriorImageUrl,
  interiorImageUrl,
} from "../../utils/generateImageUrl";

import Background from "../../assets/viewer/background.webp";
import SliderStage from "../../assets/viewer/sliderstage.webp";

function Viewer({ viewMode }) {
  // Redux Store 상태값 반환 (차량 옵션)
  const { styling, paint, wheels, seats, trim, steering } = useSelector(
    (state) => state.options
  );

  // 차량 Exterior 각도 상태 관리
  const [degree, setDegree] = useState(1);
  const { imgRef, handleDragStart, handleDragEnd, handleDragMove } =
    useExteriorHandler(degree, setDegree);

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
    <div className="sm:relative top-[100px] sm:top-auto z-20 sticky border-md-gray border-b-2 sm:border-b-0 w-full h-full overflow-hidden">
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
            src={Background}
            className="top-0 brightness-95 left-0 z-10 absolute w-full h-full object-cover"
          />
          <div className="relative z-20 flex justify-center items-center w-full h-full">
            <img
              alt="exterior"
              src={exteriorImageUrl(styling, paint, wheels, degree)}
              ref={imgRef}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              className="relative z-11 pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-13 xl:pl-11"
            />
            <img
              alt="slider-stage"
              src={SliderStage}
              className="z-10 absolute px-5 w-full pointer-events-none"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="interior-seats"
            src={interiorImageUrl(seats, trim, steering, "s")}
            className="relative z-10 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="interior-front"
            src={interiorImageUrl(seats, trim, steering, "f")}
            className="relative z-10 w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Viewer;
