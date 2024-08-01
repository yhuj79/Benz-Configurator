import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import AnimatedPage from "../components/common/AnimatedPage";
import Loader from "../components/common/Loader";
import Summary from "../components/summary/Summary";
import Viewer from "../components/configuration/Viewer";
import SideBar from "../components/configuration/SideBar";

import { setInitialOptions } from "../features/optionsSlice";
import { preloadImages } from "../utils/preloadImages";

import dataAll from "../assets/data.json";

// 차량 Configuration 페이지
function Configuration() {
  const { name } = useParams();
  const data = dataAll[name];
  const configs = dataAll.configs;

  // SideBar 선택에 따른 세 종류 Viewer 전환 (exterior, interior-seats, interior-front)
  const [viewMode, setViewMode] = useState("exterior");
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  // 옵션 초기 상태 설정, 이미지 Pre Loading
  useEffect(() => {
    if (data) {
      dispatch(setInitialOptions(data));
      preloadImages(data).then(() => {
        setIsLoaded(true);
        console.log("setIsLoaded");
      });
    }
  }, [name, dispatch, data]);

  // Pre Loading 대기 화면
  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <AnimatedPage>
      <div className="h-full lg:h-[92vh]">
        <div className="lg:flex h-full">
          <Summary />
          <Viewer viewMode={viewMode} />
          <SideBar data={data} configs={configs} setViewMode={setViewMode} />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Configuration;
