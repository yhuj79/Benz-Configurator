import { useRef } from "react";

import AnimatedPage from "../components/common/AnimatedPage";

import Banner from "../components/main/Banner";
import ModelList from "../components/main/ModelList";

function Main() {
  const modelListRef = useRef(null);

  // Explore Configurator 버튼 클릭 시 ModelList로 스크롤
  const scrollToModelList = () => {
    modelListRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <AnimatedPage>
      <Banner scrollToModelList={scrollToModelList} />
      <div ref={modelListRef}>
        <ModelList />
      </div>
    </AnimatedPage>
  );
}

export default Main;
