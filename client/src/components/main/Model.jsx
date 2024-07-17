import { Link } from "react-router-dom";

function Model({ image, name, link }) {
  return (
    <div className="md:w-1/2 m-2 overflow-hidden group">
      <Link to={link} className="relative overflow-hidden group">
        <img
          className="w-full h-[140px] md:h-auto object-cover md:opacity-70 md:transform md:transition md:duration-300 md:ease-in-out md:group-hover:scale-110 md:group-hover:opacity-100 opacity-100"
          alt=""
          src={image}
        />
        <div className="absolute bottom-0 left-0 mb-1 ml-2 md:mb-4 md:ml-5">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium whitespace-nowrap text-shadow text-slate-200 md:transform md:transition-transform md:duration-300 md:ease-in-out md:group-hover:scale-110">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Model;
