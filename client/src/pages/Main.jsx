import { useRef } from "react";

import Banner from "../components/main/Banner";
import ModelList from "../components/main/ModelList";

function Main() {
  const modelListRef = useRef(null);

  const scrollToModelList = () => {
    modelListRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div>
      <Banner scrollToModelList={scrollToModelList} />
      <div ref={modelListRef}>
        <ModelList />
      </div>
    </div>
  );
}

export default Main;
