import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/main/logo.png";
import {
  Bars3Icon,
  MapIcon,
  PhotoIcon,
  PlayIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const iconClasses = "h-8 w-8 text-slate-200";

  // 브라우저 크기 조절 시 애니메이션의 재실행을 방지
  useEffect(() => {
    setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);
  }, []);

  return (
    <header className="h-[10vh] z-10 relative flex justify-between items-center bg-black text-slate-200 text-lg py-6 md:py-10 px-10 tracking-wider font-serif">
      <div
        className={`z-20 ${
          isInitialLoad ? "opacity-0 animate-appearNormal delay-1.5s" : ""
        } hidden md:flex space-x-12`}
      >
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
      <div
        className={`absolute inset-0 flex justify-center items-center ${
          isInitialLoad ? "animate-appearZoom" : ""
        }`}
      >
        <Link to="/" className="flex flex-col items-center no-underline">
          <img className="w-12 filter brightness-150" alt="Logo" src={Logo} />
        </Link>
      </div>
      <div
        className={`z-20 ${
          isInitialLoad ? "opacity-0 animate-appearNormal delay-1.5s" : ""
        } hidden md:flex space-x-12`}
      >
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
      <div
        className={`z-20 ${
          isInitialLoad ? "opacity-0 animate-appearNormal delay-1.5s" : ""
        } md:hidden flex items-center`}
      >
        <Bars3Icon className={iconClasses} />
      </div>
    </header>
  );
}

export default Header;
