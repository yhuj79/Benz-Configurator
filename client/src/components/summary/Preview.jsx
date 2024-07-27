import React, { useState } from 'react';
import {
  exteriorImageUrl,
  interiorImageUrl,
} from "../../utils/generateImageUrl";

// Configuration Page 차량 요약 내역 Modal 이미지 Preview 컴포넌트
function Preview({ options }) {
  const [loadedImages, setLoadedImages] = useState({
    exterior1: false,
    exterior2: false,
    interiorS: false,
    interiorF: false,
  });

  const handleImageLoad = (imageName) => {
    setLoadedImages((prevState) => ({ ...prevState, [imageName]: true }));
  };

  return (
    <div>
      <div className="flex md:flex-row print:flex-row flex-col justify-between">
        <div className="bg-black md:m-2 print:m-1 my-2 w-full md:w-1/2 print:w-1/2">
          <img
            className={`w-full pointer-events-none object-cover scale-125 transition-opacity duration-500 ${loadedImages.exterior1 ? 'opacity-100' : 'opacity-0'}`}
            alt="summary-exterior-1"
            src={exteriorImageUrl(
              options.name,
              options.styling,
              options.paint,
              options.wheels,
              2
            )}
            onLoad={() => handleImageLoad('exterior1')}
          />
          {!loadedImages.exterior1 && (
            <div className="bg-gray-300 w-full h-full animate-pulse"></div>
          )}
        </div>
        <div className="bg-black md:m-2 print:m-1 my-2 w-full md:w-1/2 print:w-1/2">
          <img
            className={`w-full pointer-events-none object-cover scale-125 transition-opacity duration-500 ${loadedImages.exterior2 ? 'opacity-100' : 'opacity-0'}`}
            alt="summary-exterior-2"
            src={exteriorImageUrl(
              options.name,
              options.styling,
              options.paint,
              options.wheels,
              20
            )}
            onLoad={() => handleImageLoad('exterior2')}
          />
          {!loadedImages.exterior2 && (
            <div className="bg-gray-300 w-full h-full animate-pulse"></div>
          )}
        </div>
      </div>
      <div className="flex md:flex-row print:flex-row flex-col justify-between">
        <div className="bg-black md:m-2 print:m-1 my-2 w-full md:w-1/2 print:w-1/2">
          <img
            className={`w-full pointer-events-none object-cover transition-opacity duration-500 ${loadedImages.interiorS ? 'opacity-100' : 'opacity-0'}`}
            alt="summary-interior-s"
            src={interiorImageUrl(
              options.name,
              options.seats,
              options.trim,
              options.steering,
              "s"
            )}
            onLoad={() => handleImageLoad('interiorS')}
          />
          {!loadedImages.interiorS && (
            <div className="bg-gray-300 w-full h-full animate-pulse"></div>
          )}
        </div>
        <div className="bg-black md:m-2 print:m-1 my-2 w-full md:w-1/2 print:w-1/2">
          <img
            className={`w-full pointer-events-none object-cover transition-opacity duration-500 ${loadedImages.interiorF ? 'opacity-100' : 'opacity-0'}`}
            alt="summary-interior-f"
            src={interiorImageUrl(
              options.name,
              options.seats,
              options.trim,
              options.steering,
              "f"
            )}
            onLoad={() => handleImageLoad('interiorF')}
          />
          {!loadedImages.interiorF && (
            <div className="bg-gray-300 w-full h-full animate-pulse"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Preview;
