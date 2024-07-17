import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

import useExteriorHandler from "../../hooks/useExteriorHandler";
import { exteriorImageUrl, interiorImageUrl } from "../../utils/generateImageUrl";

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
    <Swiper
      ref={swiperRef}
      modules={[EffectFade]}
      effect="fade"
      allowTouchMove={false}
      navigation={false}
      pagination={false}
      className="transform transition duration-300 relative w-full h-full overflow-hidden flex items-center justify-center"
    >
      <SwiperSlide>
        <img
          alt="background"
          src={Background}
          className="absolute top-0 left-0 w-full h-full z-10 object-cover brightness-95"
        />
        <div className="relative flex items-center justify-center z-20 w-full h-full">
          <img
            alt="exterior"
            src={exteriorImageUrl(styling, paint, wheels, degree)}
            ref={imgRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            className="relative z-11 2xl:pl-13 xl:pl-11 lg:pl-9 md:pl-7 sm:pl-5 pl-3"
          />
          <img
            alt="slider-stage"
            src={SliderStage}
            className="absolute z-10 px-5 pointer-events-none"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="interior-seats"
          src={interiorImageUrl(seats, trim, steering, "s")}
          className="relative w-full h-full z-10 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="interior-front"
          src={interiorImageUrl(seats, trim, steering, "f")}
          className="relative w-full h-full z-10 object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Viewer;
