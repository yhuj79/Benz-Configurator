import React from "react";
import { useSelector } from "react-redux";

import { optionImageUrl } from "../../utils/generateImageUrl";

function OptionSelector({ option, isOpen, onClick, dispatch }) {
  const { name, icon, desc, choices, action } = option;
  const selected = useSelector((state) => state.options[icon]);
  const prices = useSelector((state) => state.options.prices[icon]);

  if (choices.length > 1)
    return (
      <div>
        <div
          className={`flex bg-black-gray md:hover:bg-dark-gray transform transition duration-300 mx-5 mt-4 p-3 rounded-lg border-2 border-md-gray cursor-pointer ${
            isOpen ? "bg-dark-gray scale-105 border-none" : ""
          }`}
          onClick={onClick}
        >
          <img
            className="w-16 h-16"
            alt={name}
            src={require(`../../assets/option/icon_${icon}.webp`)}
          />
          <div className="mx-2 mt-1.5">
            <h1 className="font-bold text-head-line text-lg">{name}</h1>
            <p className="text-desc text-sm">{desc}</p>
            {isOpen && (
              <p className="mt-2 text-desc text-sm">
                selected :{" "}
                <span className="font-bold text-head-line">{selected}</span>
              </p>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="bg-dark-gray mx-5 mt-2 mb-8 animate-appearLeft">
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
                  <p className="h-[24px] text-desc text-xs leading-5">
                    {choice}
                  </p>
                  <p className="h-[24px] text-desc text-xs">
                    {prices[choice] > 0 &&
                      `+ ${prices[choice].toLocaleString()} ₩`}
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
                    className="rounded-l-md w-[45px] h-[45px]"
                  />
                  <div className="flex justify-between px-2 w-full">
                    <p className="text-desc text-sm leading-[45px]">{choice}</p>
                    <p className="text-desc text-sm leading-[45px]">
                      {prices[choice] > 0 &&
                        `+ ${prices[choice].toLocaleString()} ₩`}
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
