import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Selector from "./Selector";
import Reset from "./Reset";

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

// Configuration Page 옵션 고르는 SideBar 컴포넌트
function SideBar({ data, configs, setViewMode }) {
  const dispatch = useDispatch();
  const [openOption, setOpenOption] = useState(null);

  // 옵션 선택 시 열려 있던 Selector 닫기
  const handleOptionClick = (optionName) => {
    setOpenOption(openOption === optionName ? null : optionName);
  };

  return (
    <div className="flex flex-col flex-2 bg-dark-gray pb-4 border-l-0 border-l-md-gray md:border-l-2 min-w-full lg:min-w-[384px] max-w-full h-full overflow-y-auto scrollbar-hide">
      {configs.map((m) => {
        const action = actionsMap[m.action];
        const choices = data[m.choices];

        return (
          <Selector
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
      <div className="mt-auto">
        <Reset data={data} />
      </div>
    </div>
  );
}

export default SideBar;
