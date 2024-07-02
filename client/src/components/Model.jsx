function Model({ image, name }) {
  return (
    <div className="relative w-1/2 m-2">
      <img className="w-full opacity-70" alt="" src={image} />
      <div className="absolute bottom-[5%] left-[3%]">
        <p className="font-serif text-4xl font-medium text-shadow text-slate-200 text-shadow-sm">
          {name}
        </p>
      </div>
    </div>
  );
}

export default Model;
