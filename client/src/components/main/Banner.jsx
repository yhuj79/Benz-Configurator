function Banner({ scrollToModelList }) {
  return (
    <div className="relative h-screen">
      <video muted autoPlay loop playsInline className="m-auto w-full h-[85%] object-cover">
        <source src={require("../../assets/main/intro.mp4")} type="video/mp4" />
      </video>
      <div className="top-0 left-0 absolute w-full h-[85%]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      </div>
      <div className="top-1/2 left-1/2 absolute text-center text-head-line transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="opacity-0 text-shadow-md mb-4 font-serif text-3xl md:text-6xl whitespace-nowrap animate-appearDown delay-0.6s">
          Welcome to Benz
        </h1>
        <p className="opacity-0 text-shadow mb-6 text-base md:text-xl animate-appearDown delay-0.9s">
          Experience the ultimate luxury and performance
        </p>
        <button
          onClick={scrollToModelList}
          className="border-2 bg-blue-600 md:hover:bg-blue-800 opacity-0 shadow-lg md:hover:shadow-xl text-shadow-sm px-6 py-3 border-blue-600 rounded-md font-semibold text-head-line whitespace-nowrap transition animate-appearDown duration-300 delay-1.2s"
        >
          Explore Configurator
        </button>
      </div>
    </div>
  );
}

export default Banner;
