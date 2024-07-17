import React, { useState } from "react";
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

const actionsMap = {
  setStyling,
  setPaint,
  setWheels,
  setSeats,
  setTrim,
  setSteering,
};

function SideBar({ options, configs, setViewMode }) {
  const dispatch = useDispatch();
  const [openOption, setOpenOption] = useState(null);

  // OptionSelector 선택 시 열려 있던 OptionSelector 닫기
  const handleOptionClick = (optionName) => {
    setOpenOption(openOption === optionName ? null : optionName);
  };

  return (
    <div className="flex-2 bg-dark-gray pb-4 min-w-full lg:min-w-[420px] max-w-full h-full overflow-y-auto scrollbar-hide">
      {configs.map((m) => {
        const action = actionsMap[m.action];
        const choices = options[m.choices];

        return (
          <OptionSelector
            key={m.name}
            option={{ ...m, action, choices }}
            isOpen={openOption === m.name}
            onClick={() => {
              handleOptionClick(m.name);
              setViewMode(m.viewMode);
            }}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}

export default SideBar;
