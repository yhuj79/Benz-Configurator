import { Link } from "react-router-dom";

// Main Page 차량 카드 컴포넌트
function Model({ image, name, link }) {
  return (
    <div className="m-2 md:w-1/2 overflow-hidden group">
      <Link to={link} className="relative overflow-hidden group">
        <img
          className="md:group-hover:scale-110 opacity-100 md:opacity-80 md:group-hover:opacity-100 w-full h-[140px] md:h-auto md:transform md:transition md:duration-300 object-cover md:ease-in-out"
          alt={name}
          src={image}
        />
        <div className="bottom-0 left-0 absolute mb-1 md:mb-4 ml-2 md:ml-5">
          <p className="md:group-hover:scale-110 text-shadow font-medium font-serif text-2xl text-slate-200 md:text-3xl lg:text-4xl whitespace-nowrap md:transform md:transition-transform md:duration-300 md:ease-in-out">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Model;
