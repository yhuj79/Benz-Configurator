import React, { CSSProperties, useEffect } from "react";

import RingLoader from "react-spinners/RingLoader";

import { disableScroll, enableScroll } from "../../utils/scrollControl";

// Loader 컴포넌트
function Loader() {
  const override: CSSProperties = {
    marginBottom: "70px",
  };

  // 로딩 중 스크롤을 중지시키고, 끝나면 스크롤을 재개
  useEffect(() => {
    disableScroll();
    return () => {
      enableScroll();
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-[93vh]">
      <RingLoader
        color={"#ffffff"}
        size={50}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
