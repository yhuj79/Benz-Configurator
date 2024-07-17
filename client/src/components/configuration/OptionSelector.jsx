import React from "react";
import { useSelector } from "react-redux";

function OptionSelector({ option, isOpen, onClick, dispatch }) {
  const { name, icon, desc, choices, action } = option;

  const selectedOption = useSelector((state) => state.options[icon]);

  return (
    <div>
      <div
        className={`flex bg-black-gray hover:bg-dark-gray transform transition duration-300 mx-5 mt-4 p-3 rounded-lg border-2 border-md-gray cursor-pointer ${
          isOpen ? "bg-dark-gray scale-110 border-none" : ""
        }`}
        onClick={onClick}
      >
        <img
          className="w-16 h-16"
          alt={name}
          src={require(`../../assets/option/icon_${icon}.webp`)}
        />
        <div className="mx-2 mt-1.5">
          <h1 className="text-lg font-bold text-head-line">{name}</h1>
          <p className="text-sm text-desc">{desc}</p>
          {isOpen && (
            <p className="mt-2 text-sm text-desc">
              selected :{" "}
              <span className="text-head-line font-bold">{selectedOption}</span>
            </p>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mx-5 mt-2 mb-8 bg-dark-gray animate-appearLeft">
          <div className="flex">
            {choices.map((choice) => (
              <div
                key={choice}
                className={`text-center w-[120px] h-[120px] transform transition duration-300 border-2 m-1 ${
                  selectedOption === choice
                    ? "border-head-line"
                    : "border-md-gray"
                } bg-black-gray rounded-lg`}
                onClick={() => dispatch(action(choice))}
              >
                <img
                  alt={choice}
                  src={require(`../../assets/option/${choice}.webp`)}
                  className="w-[120px] h-[96px] rounded-t-md"
                />
                <p className="h-[24px] leading-5 text-desc text-xs">{choice}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OptionSelector;
