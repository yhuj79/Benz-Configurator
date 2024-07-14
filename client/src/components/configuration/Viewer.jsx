import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Background from "../../assets/viewer/background.png";
import SliderStage from "../../assets/viewer/sliderstage.png";

function Viewer({ viewMode }) {
  const imgRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [degree, setDegree] = useState(1);
  const [throttle, setThrottle] = useState(0);

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

  let imageUrl;
  if (viewMode === "exterior") {
    imageUrl = `https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/amg/amg-ex-${styling}-${paint}-${wheels}-${degree}.webp`;
  } else if (viewMode === "interior-seats") {
    imageUrl = `https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/amg/amg-in-s-${seats}-${trim}-${steering}.webp`;
  } else if (viewMode === "interior-front") {
    imageUrl = `https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/amg/amg-in-f-${seats}-${trim}-${steering}.webp`;
  }

  return (
    <div className="relative flex-8 w-full h-full bg-gray-200 overflow-hidden flex items-center justify-center">
      {viewMode === "exterior" ? (
        // exterior
        <>
          <img
            alt="background"
            src={Background}
            className="absolute top-0 left-0 w-full h-full z-10 object-cover brightness-95"
          />
          <div className="relative flex items-center justify-center z-20">
            <img
              alt="exterior"
              src={imageUrl}
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
      ) : (
        // interior
        <img
          alt="interior"
          src={imageUrl}
          className="relative w-full h-full z-10 object-cover"
        />
      )}
    </div>
  );
}

export default Viewer;
