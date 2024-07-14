import { useParams } from "react-router-dom";
import { useState } from "react";
import Viewer from "../components/configuration/Viewer";
import SideBar from "../components/configuration/SideBar";
import data from "../assets/data.json";

function Configuration() {
  const { name } = useParams();
  const options = data[name];

  // 세 종류 뷰어 전환
  // exterior ( Styling Package, Paint, Wheels )
  // interior-seats ( Seats )
  // interior-front ( Trim, Steering )
  const [viewMode, setViewMode] = useState("exterior");

  return (
    <div className="h-[87vh]">
      <div className="h-[90%] flex">
        <Viewer viewMode={viewMode} />
        <SideBar options={options} setViewMode={setViewMode} />
      </div>
      <div className="h-[10%] bg-black-gray">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default Configuration;
