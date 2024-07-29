import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// 차량 카드 컴포넌트
function Model({ image, name, link, type }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setLoading(false);
  }, [image]);

  const handleNavigate = (link) => {
    if (type === "main") {
      navigate(link);
    } else {
      window.location.assign(`${process.env.REACT_APP_URL}${link}`);
    }
  };

  return (
    <div className="m-2 md:w-1/2 overflow-hidden group">
      {loading ? (
        <Skeleton height="200px" baseColor="#444444" highlightColor="#2F2F2F" />
      ) : (
        <div
          onClick={() => handleNavigate(link)}
          className="relative cursor-pointer overflow-hidden group"
        >
          <img
            className={`md:group-hover:scale-110 w-full h-[140px] md:h-auto md:transform md:transition md:duration-300 object-cover md:opacity-80 md:group-hover:opacity-100 duration-300 ease-in-out`}
            alt={name}
            src={image}
          />
          <div className="bottom-0 left-0 absolute mb-1 md:mb-4 ml-2 md:ml-5">
            <p className="md:group-hover:scale-110 text-shadow font-medium font-serif text-2xl text-slate-200 md:text-3xl lg:text-4xl whitespace-nowrap md:transform md:transition-transform md:duration-300 md:ease-in-out">
              {name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Model;
