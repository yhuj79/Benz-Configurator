import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import AnimatedPage from "../components/common/AnimatedPage";
import Viewer from "../components/configuration/Viewer";
import SideBar from "../components/configuration/SideBar";

import { setInitialOptions } from "../features/optionsSlice";
import { preloadImages } from "../utils/preloadImages";

import data from "../assets/data.json";
import ViewerLoader from "../components/configuration/ViewerLoader";

function Configuration() {
  // data.json에서 차량 옵션 불러오기
  const { name } = useParams();
  const options = data[name];
  const configs = data.configs;

  // SideBar 선택에 따른 세 종류 Viewer 전환 (exterior, interior-seats, interior-front)
  const [viewMode, setViewMode] = useState("exterior");
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  // 옵션 초기 상태 설정, 이미지 Pre Loading
  useEffect(() => {
    if (options) {
      dispatch(setInitialOptions(options));
      preloadImages(options).then(() => {
        setIsLoaded(true);
      });
    }
  }, [name, dispatch, options]);

  // Pre Loading 대기 화면
  if (!isLoaded) {
    return <ViewerLoader />;
  }

  return (
    <AnimatedPage>
      <div className="h-full lg:h-[90vh]">
        <div className="h-full lg:flex">
          <Viewer viewMode={viewMode} />
          <SideBar
            options={options}
            configs={configs}
            setViewMode={setViewMode}
          />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Configuration;
