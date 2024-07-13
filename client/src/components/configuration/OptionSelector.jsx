import React from "react";

function OptionSelector({ name, icon, desc, isOpen, onClick, choices, action, dispatch }) {
  return (
    <div className="mb-4">
      <div
        className={`flex bg-black-gray hover:bg-dark-gray transform transition duration-300 mx-5 my-4 p-3 rounded-lg border border-md-gray cursor-pointer ${isOpen ? "bg-dark-gray" : ""}`}
        onClick={onClick}
      >
        <img
          className="w-16 h-16"
          alt={name}
          src={require(`../../assets/option/${icon}.png`)}
        />
        <div className="mx-2 mt-1.5 mb-2">
          <h1 className="text-lg font-bold text-head-line">{name}</h1>
          <p className="text-sm text-desc">{desc}</p>
        </div>
      </div>
      {isOpen && (
        <div className="mx-5 p-3 bg-dark-gray rounded-lg">
          <p className="text-white">Detailed options for {name}</p>
          {choices.map((choice) => (
            <button
              key={choice}
              className="text-white m-2 p-2 bg-gray-700 rounded"
              onClick={() => dispatch(action(choice))}
            >
              {choice}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default OptionSelector;
