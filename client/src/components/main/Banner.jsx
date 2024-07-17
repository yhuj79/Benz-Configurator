function Banner({ scrollToModelList }) {
  return (
    <div className="relative h-screen">
      <video muted autoPlay loop playsInline className="h-[85%] w-full object-cover m-auto">
        <source src={require("../../assets/main/intro.mp4")} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-[85%]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-head-line">
        <h1 className="opacity-0 animate-appearDown delay-0.6s font-serif whitespace-nowrap text-3xl md:text-6xl text-shadow-md mb-4">
          Welcome to Benz
        </h1>
        <p className="opacity-0 animate-appearDown delay-0.9s text-base md:text-xl text-shadow mb-6">
          Experience the ultimate luxury and performance
        </p>
        <button
          onClick={scrollToModelList}
          className="transition duration-300 animate-appearDown opacity-0 delay-1.2s whitespace-nowrap text-shadow-sm text-head-line font-semibold px-6 py-3 bg-blue-600 md:hover:bg-blue-800 border-2 border-blue-600 rounded-md shadow-lg md:hover:shadow-xl "
        >
          Explore Configurator
        </button>
      </div>
    </div>
  );
}

export default Banner;
