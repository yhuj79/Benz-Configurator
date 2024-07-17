import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/main/logo.webp";
import {
  Bars3Icon,
  MapIcon,
  PhotoIcon,
  PlayIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const tw_icon = "h-8 w-8 text-slate-200";

  // 브라우저 크기 조절 시 애니메이션의 재실행을 방지
  useEffect(() => {
    setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);
  }, []);

  return (
    <header className="relative z-10 flex justify-between items-center bg-black px-10 py-6 md:py-10 h-[8vh] font-serif text-lg text-slate-200 tracking-wider">
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
          <PlayIcon className={tw_icon} />
        </a>
        <Link to="/album">
          <PhotoIcon className={tw_icon} />
        </Link>
      </div>
      <div
        className={`absolute inset-0 flex justify-center items-center ${
          isInitialLoad ? "animate-appearZoom" : ""
        }`}
      >
        <Link to="/" className="flex flex-col items-center no-underline">
          <img className="brightness-150 w-12 filter" alt="Logo" src={Logo} />
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
          <MapIcon className={tw_icon} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mercedes-benz.com"
        >
          <GlobeAltIcon className={tw_icon} />
        </a>
      </div>
      <div
        className={`z-20 ${
          isInitialLoad ? "opacity-0 animate-appearNormal delay-1.5s" : ""
        } md:hidden flex items-center`}
      >
        <Bars3Icon className={tw_icon} />
      </div>
    </header>
  );
}

export default Header;
