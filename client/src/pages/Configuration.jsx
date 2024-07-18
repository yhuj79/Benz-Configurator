import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import ViewerLoader from "../components/configuration/ViewerLoader";
import AnimatedPage from "../components/common/AnimatedPage";
import Summary from "../components/configuration/Summary";
import Viewer from "../components/configuration/Viewer";
import SideBar from "../components/configuration/SideBar";

import { setInitialOptions } from "../features/optionsSlice";
import { preloadImages } from "../utils/preloadImages";

import data from "../assets/data.json";

function Configuration() {
  const { name } = useParams();
  const options = data[name];
  const configs = data.configs;

  const [viewMode, setViewMode] = useState("exterior");
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (options) {
      dispatch(setInitialOptions(options));
      preloadImages(options).then(() => {
        setIsLoaded(true);
      });
    }
  }, [name, dispatch, options]);

  if (!isLoaded) {
    return <ViewerLoader />;
  }

  return (
    <AnimatedPage>
      <div className="h-full lg:h-[92vh]">
        <div className="lg:flex h-full">
          <Summary />
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
