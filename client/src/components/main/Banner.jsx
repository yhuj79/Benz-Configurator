import imageMainGif from "../../assets/main/intro.gif";

function Banner({ scrollToModelList }) {
  return (
    <div className="relative h-screen">
      <img
        className="h-[85%] w-full object-cover m-auto"
        alt=""
        src={imageMainGif}
      />
      <div className="absolute top-0 left-0 w-full h-[85%]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="opacity-0 animate-appearDown delay-0.6s font-serif text-4xl text-shadow-md md:text-6xl mb-4">
          Welcome to Benz
        </h1>
        <p className="opacity-0 animate-appearDown delay-0.9s text-lg text-shadow md:text-xl mb-6">
          Experience the ultimate luxury and performance
        </p>
        <button
          onClick={scrollToModelList}
          className="opacity-0 animate-appearDown delay-1.2s text-shadow-sm px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition duration-300"
        >
          Explore Configurator
        </button>
      </div>
    </div>
  );
}

export default Banner;
