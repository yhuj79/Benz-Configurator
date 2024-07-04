function Model({ image, name }) {
  return (
    <div className="relative w-1/2 m-2 overflow-hidden group">
      <img
        className="w-full opacity-70 transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100"
        alt=""
        src={image}
      />
      <div className="absolute bottom-[5%] left-[4%]">
        <p className="font-serif text-4xl font-medium text-shadow text-slate-200 transform transition-transform duration-300 ease-in-out group-hover:scale-110">
          {name}
        </p>
      </div>
    </div>
  );
}

export default Model;
