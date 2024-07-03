import { Link } from "react-router-dom";
import {
  Bars3Icon,
  MapIcon,
  PhotoIcon,
  PlayIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

import Logo from "../assets/Logo.png";

function Header() {
  const iconClasses = "h-8 w-8 text-slate-200";

  return (
    <header className="flex justify-between items-center bg-black text-slate-200 text-lg py-6 md:py-10 px-10 tracking-wider font-serif">
      <div className="hidden md:flex space-x-12">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/mercedesbenztv"
        >
          <PlayIcon className={iconClasses} />
        </a>
        <Link to="/album">
          <PhotoIcon className={iconClasses} />
        </Link>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="flex flex-col items-center no-underline">
          <img className="w-12 filter brightness-150" alt="Logo" src={Logo} />
          <p className="hidden md:flex mt-1">Mercedes-Benz</p>
        </Link>
      </div>
      <div className="hidden md:flex space-x-12">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.co.kr/maps/search/benz"
        >
          <MapIcon className={iconClasses} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mercedes-benz.com"
        >
          <GlobeAltIcon className={iconClasses} />
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <Bars3Icon className={iconClasses} />
      </div>
    </header>
  );
}

export default Header;
