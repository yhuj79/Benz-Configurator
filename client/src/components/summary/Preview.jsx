import {
    exteriorImageUrl,
    interiorImageUrl,
  } from "../../utils/generateImageUrl";
  
  function Preview({ options }) {
    return (
      <div>
        <div className="flex md:flex-row print:flex-row flex-col justify-between">
          <div className="bg-black md:m-2 print:m-1 my-2 w-full md:w-1/2 print:w-1/2">
            <img
              className="w-full pointer-events-none object-cover scale-125"
              alt="summary-exterior-1"
              src={exteriorImageUrl(
                options.styling,
                options.paint,
                options.wheels,
                2
              )}
            />
          </div>
          <div className="bg-black md:m-2 print:m-1 my-2 w-full md:w-1/2 print:w-1/2">
            <img
              className="w-full pointer-events-none object-cover scale-125"
              alt="summary-exterior-2"
              src={exteriorImageUrl(
                options.styling,
                options.paint,
                options.wheels,
                20
              )}
            />
          </div>
        </div>
        <div className="flex md:flex-row print:flex-row flex-col justify-between">
          <div className="bg-black md:m-2 print:m-1 my-2 w-full md:w-1/2 print:w-1/2">
            <img
              className="w-full pointer-events-none object-cover"
              alt="summary-interior-s"
              src={interiorImageUrl(
                options.seats,
                options.trim,
                options.steering,
                "s"
              )}
            />
          </div>
          <div className="bg-black md:m-2 print:m-1 my-2 w-full md:w-1/2 print:w-1/2">
            <img
              className="w-full pointer-events-none object-cover"
              alt="summary-interior-f"
              src={interiorImageUrl(
                options.seats,
                options.trim,
                options.steering,
                "f"
              )}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Preview;
  