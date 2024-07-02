import { Link } from "react-router-dom";
import {
  Bars3Icon,
  PhotoIcon,
  PlayIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

import Logo from "../assets/Logo.png";

function Header() {
  const iconClasses = "h-8 w-8 text-slate-200"; // 아이콘 크기를 8로 설정

  return (
    <header className="flex justify-between items-center bg-black text-slate-200 text-lg py-4 px-10 tracking-wider font-serif">
      <div className="flex space-x-12">
        <Bars3Icon className={iconClasses} />
        <PhotoIcon className={iconClasses} />
      </div>
      <Link to="/" className="flex flex-col items-center no-underline">
        <img className="w-12 filter brightness-150" alt="Logo" src={Logo} />
        <p className="mt-2">Mercedes-Benz</p>
      </Link>
      <div className="flex space-x-12">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/mercedesbenztv"
        >
          <PlayIcon className={iconClasses} />
        </a>
        <GlobeAltIcon className={iconClasses} />
      </div>
    </header>
  );
}

export default Header;
