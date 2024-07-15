import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

import Background from "../../assets/viewer/background.png";
import SliderStage from "../../assets/viewer/sliderstage.png";

function Viewer({ viewMode }) {
  const imgRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [degree, setDegree] = useState(1);
  const [throttle, setThrottle] = useState(0);
  const swiperRef = useRef(null);

  const styling = useSelector((state) => state.options.styling);
  const paint = useSelector((state) => state.options.paint);
  const wheels = useSelector((state) => state.options.wheels);
  const seats = useSelector((state) => state.options.seats);
  const trim = useSelector((state) => state.options.trim);
  const steering = useSelector((state) => state.options.steering);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + imgRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = imgRef.current;
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth < clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }

      if (startX - e.pageX > 0) {
        setThrottle(0);
        degreeLeft();
      } else if (startX - e.pageX < 0) {
        setThrottle(0);
        degreeRight();
      }
    }
  };

  const degreeLeft = () => {
    setThrottle(throttle + 1);
    if (throttle === 8) {
      degree === 36 ? setDegree(1) : setDegree(degree + 1);
      setThrottle(0);
    }
  };

  const degreeRight = () => {
    setThrottle(throttle + 1);
    if (throttle === 8) {
      degree === 1 ? setDegree(36) : setDegree(degree - 1);
      setThrottle(0);
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (viewMode === "exterior") {
        swiperRef.current.swiper.slideTo(0);
      } else if (viewMode === "interior-seats") {
        swiperRef.current.swiper.slideTo(1);
      } else {
        swiperRef.current.swiper.slideTo(2);
      }
    }
  }, [viewMode]);

  return (
    <>
      <style>
        {`
          .swiper-slide {
            height: auto !important;
          }
        `}
      </style>
      <Swiper
        ref={swiperRef}
        modules={[EffectFade]}
        effect="fade"
        spaceBetween={30}
        slidesPerView={1}
        allowTouchMove={false}
        navigation={false}
        pagination={false}
        className="relative w-full h-full overflow-hidden flex items-center justify-center"
      >
        <SwiperSlide>
          <>
            <img
              alt="background"
              src={Background}
              className="absolute top-0 left-0 w-full h-full z-10 object-cover brightness-95"
            />
            <div className="relative flex items-center justify-center z-20 w-full h-full">
              <img
                alt="exterior"
                src={`https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/amg/amg-ex-${styling}-${paint}-${wheels}-${degree}.webp`}
                ref={imgRef}
                onMouseDown={onDragStart}
                onMouseMove={onDragMove}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                className="relative z-11 2xl:pl-13 xl:pl-11 lg:pl-9 md:pl-7 sm:pl-5 pl-3"
              />
              <img
                alt="slider-stage"
                src={SliderStage}
                className="absolute z-10 px-5 pointer-events-none"
              />
            </div>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="interior"
            src={`https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/amg/amg-in-s-${seats}-${trim}-${steering}.webp`}
            className="relative w-full h-full z-10 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="interior"
            src={`https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/amg/amg-in-f-${seats}-${trim}-${steering}.webp`}
            className="relative w-full h-full z-10 object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Viewer;
