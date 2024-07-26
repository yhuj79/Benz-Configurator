import { useSelector } from "react-redux";

import { ArrowForwardIosSharp, ArrowBackIosSharp } from "@mui/icons-material";

import { optionImageUrl } from "../../utils/generateImageUrl";

// Configuration Page SideBar 옵션 버튼 컴포넌트
function OptionSelector({ option, isOpen, onClick, dispatch }) {
  const { name, icon, desc, choices, action } = option;
  const selected = useSelector((state) => state.options[icon]);
  const prices = useSelector((state) => state.options.prices[icon]);

  // 고를 옵션이 없는 경우 표시되지 않음
  if (choices.length > 1)
    return (
      <div>
        <div
          className={`flex justify-between items-center bg-black-gray md:hover:bg-dark-gray transform transition duration-300 mx-5 mt-4 p-2 md:p-3 rounded-lg border-2 border-md-gray cursor-pointer ${
            isOpen ? "bg-dark-gray scale-105 border-none" : ""
          }`}
          onClick={onClick}
        >
          <div className="flex items-center">
            <img
              className="w-12 md:w-16 h-12 md:h-16"
              alt={name}
              src={require(`../../assets/option/icon_${icon}.webp`)}
            />
            <div className="mx-2">
              <h1 className="font-bold text-base text-head-line md:text-lg">
                {name}
              </h1>
              <p className="mb-0.5 text-desc text-xs md:text-sm">{desc}</p>
              {isOpen && (
                <p className="mt-2 text-desc text-xs md:text-sm">
                  selected:{" "}
                  <span className="font-bold text-head-line text-sm">{selected}</span>
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center text-head-line">
            {isOpen ? (
              <ArrowBackIosSharp sx={{ fontSize: 16 }} />
            ) : (
              <ArrowForwardIosSharp sx={{ fontSize: 16 }} />
            )}
          </div>
        </div>
        {isOpen && (
          <div className="bg-dark-gray mx-5 mt-2 mb-6 animate-appearLeft">
            <div className="sm:flex hidden">
              {choices.map((choice) => (
                <div
                  key={choice}
                  className={`text-center w-[120px] h-[120px] transform transition duration-300 border-2 m-1 ${
                    selected === choice ? "border-head-line" : "border-md-gray"
                  } bg-black-gray rounded-lg`}
                  onClick={() => dispatch(action(choice))}
                >
                  <img
                    alt={choice}
                    src={optionImageUrl(choice)}
                    className="rounded-t-md w-[120px] h-[96px]"
                  />
                  <p className="h-[24px] text-desc text-xs leading-5">{choice}</p>
                  <p className="h-[24px] text-desc text-xs">
                    {prices[choice] > 0 && `+ ${prices[choice].toLocaleString()} ₩`}
                  </p>
                </div>
              ))}
            </div>
            <div className="block sm:hidden">
              {choices.map((choice) => (
                <div
                  key={choice}
                  className={`flex text-center w-full transform transition duration-300 border-2 mb-2 ${
                    selected === choice ? "border-head-line" : "border-md-gray"
                  } bg-black-gray rounded-lg`}
                  onClick={() => dispatch(action(choice))}
                >
                  <img
                    alt={choice}
                    src={optionImageUrl(choice)}
                    className="rounded-l-md w-[50px] h-[40px]"
                  />
                  <div className="flex justify-between px-2 w-full">
                    <p className="text-desc text-sm leading-[40px]">{choice}</p>
                    <p className="text-desc text-sm leading-[40px]">
                      {prices[choice] > 0 && `+ ${prices[choice].toLocaleString()} ₩`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}

export default OptionSelector;
