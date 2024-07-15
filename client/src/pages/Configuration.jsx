import { useState } from "react";
import { useParams } from "react-router-dom";

import AnimatedPage from "../components/common/AnimatedPage";

import Viewer from "../components/configuration/Viewer";
import SideBar from "../components/configuration/SideBar";

import data from "../assets/data.json";

function Configuration() {
  const { name } = useParams();
  const options = data[name];

  // SideBar 선택에 따른 세 종류 Viewer 전환
  // exterior ( Styling Package, Paint, Wheels )
  // interior-seats ( Seats )
  // interior-front ( Trim, Steering )
  const [viewMode, setViewMode] = useState("exterior");

  return (
    <AnimatedPage>
      <div className="h-full lg:h-[90vh]">
        <div className="h-full lg:flex">
          <Viewer viewMode={viewMode} />
          <SideBar options={options} setViewMode={setViewMode} />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Configuration;
