import React from "react";

function OptionSelector({
  name,
  icon,
  desc,
  isOpen,
  onClick,
  choices,
  action,
  dispatch,
}) {
  return (
    <div>
      <div
        className={`flex bg-black-gray hover:bg-dark-gray transform transition duration-300 mx-5 mt-4 p-3 rounded-lg border border-md-gray cursor-pointer ${
          isOpen ? "bg-dark-gray scale-110 border-none" : ""
        }`}
        onClick={onClick}
      >
        <img
          className="w-16 h-16"
          alt={name}
          src={require(`../../assets/option/icon_${icon}.png`)}
        />
        <div className="mx-2 mt-1.5">
          <h1 className="text-lg font-bold text-head-line">{name}</h1>
          <p className="text-sm text-desc">{desc}</p>
          {isOpen && (
            <p className="text-sm text-desc">
              selected : <span className="text-head-line">???</span>
            </p>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mx-5 bg-dark-gray">
          <div className="flex">
            {choices.map((choice) => (
              <div
                key={choice}
                className="text-center w-24 m-1 p-2 border-2 border-black-gray bg-black-gray rounded-lg"
                onClick={() => dispatch(action(choice))}
              >
                <img
                  alt={choice}
                  src={require(`../../assets/option/${choice}.png`)}
                  className="w-20 h-16"
                />
                <p className="text-white">{choice}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OptionSelector;
