import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 차량 카드 컴포넌트
function Model({ image, name, link, type }) {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  const handleNavigate = (link) => {
    if (type === "main") {
      navigate(link);
    } else {
      window.location.assign(`${process.env.REACT_APP_URL}${link}`);
    }
  };

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="m-2 md:w-1/2 overflow-hidden group">
      <div
        onClick={() => handleNavigate(link)}
        className="relative cursor-pointer overflow-hidden group"
      >
        <img
          className={`md:group-hover:scale-110 w-full h-[140px] md:h-auto md:transform md:transition md:duration-300 object-cover md:ease-in-out transition-opacity duration-500 ease-in-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          alt={name}
          src={image}
          onLoad={handleImageLoad}
        />
        {!loaded && (
          <div className="top-0 left-0 absolute bg-gray-300 w-full h-full transition-opacity animate-pulse duration-500 ease-in-out"></div>
        )}
        <div className="bottom-0 left-0 absolute mb-1 md:mb-4 ml-2 md:ml-5">
          <p className="md:group-hover:scale-110 text-shadow font-medium font-serif text-2xl text-slate-200 md:text-3xl lg:text-4xl whitespace-nowrap md:transform md:transition-transform md:duration-300 md:ease-in-out">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Model;
