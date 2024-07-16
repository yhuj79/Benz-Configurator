import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import AnimatedPage from "../components/common/AnimatedPage";
import Viewer from "../components/configuration/Viewer";
import SideBar from "../components/configuration/SideBar";

import data from "../assets/data.json";
import { setInitialOptions } from "../features/optionsSlice";

function Configuration() {
  // data.json에서 해당 차량 옵션 불러오기
  const { name } = useParams();
  const options = data[name];
  const configs = data.configs;

  const [viewMode, setViewMode] = useState("exterior");
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  // 옵션 초기 상태 설정
  useEffect(() => {
    if (options) {
      dispatch(setInitialOptions(options));
      setIsLoaded(true);
    }
  }, [name, dispatch, options]);

  if (!isLoaded) {
    return <div>Loading...</div>;
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
