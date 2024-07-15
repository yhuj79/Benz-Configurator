import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import OptionSelector from "./OptionSelector";

import {
  setStyling,
  setPaint,
  setWheels,
  setSeats,
  setTrim,
  setSteering,
} from "../../features/optionsSlice";

function SideBar({ options, setViewMode }) {
  const dispatch = useDispatch();
  const [openOption, setOpenOption] = useState(null);
  const sideBarRef = useRef(null);

  const optionConfigs = [
    {
      name: "Styling Package",
      icon: "styling",
      desc: "Add exterior styling package",
      action: setStyling,
      choices: options.styling,
      onClick: () => setViewMode("exterior"),
    },
    {
      name: "Paint",
      icon: "paint",
      desc: "Choose the exterior color",
      action: setPaint,
      choices: options.paint,
      onClick: () => setViewMode("exterior"),
    },
    {
      name: "Wheels",
      icon: "wheels",
      desc: "Configure rims and calipers",
      action: setWheels,
      choices: options.wheels,
      onClick: () => setViewMode("exterior"),
    },
    {
      name: "Seats",
      icon: "seats",
      desc: "Select seat type and color",
      action: setSeats,
      choices: options.seats,
      onClick: () => setViewMode("interior-seats"),
    },
    {
      name: "Trim",
      icon: "trim",
      desc: "Details which make the difference",
      action: setTrim,
      choices: options.trim,
      onClick: () => setViewMode("interior-front"),
    },
    {
      name: "Steering Wheel",
      icon: "steering",
      desc: "Select the steering wheel",
      action: setSteering,
      choices: options.steering,
      onClick: () => setViewMode("interior-front"),
    },
  ];

  // OptionSelector 선택 시 열려 있던 OptionSelector 닫기
  const handleOptionClick = (optionName) => {
    setOpenOption(openOption === optionName ? null : optionName);
  };

  return (
    <div
      ref={sideBarRef}
      className="flex-2 lg:min-w-[420px] min-w-full max-w-full h-full pb-4 bg-dark-gray overflow-y-auto scrollbar-hide"
    >
      {optionConfigs.map((option) => (
        <OptionSelector
          key={option.name}
          name={option.name}
          icon={option.icon}
          desc={option.desc}
          isOpen={openOption === option.name}
          onClick={() => {
            handleOptionClick(option.name);
            option.onClick();
          }}
          choices={option.choices}
          action={option.action}
          dispatch={dispatch}
          sideBarRef={sideBarRef}
        />
      ))}
    </div>
  );
}

export default SideBar;
