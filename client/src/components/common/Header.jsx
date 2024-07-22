import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/main/logo.webp";
import {
  IntegrationInstructionsSharp,
  PhotoLibrarySharp,
  MapOutlined,
  LanguageOutlined,
  MenuOutlined,
} from "@mui/icons-material";

function Header() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // 브라우저 크기 조절 시 애니메이션의 재실행을 방지
  useEffect(() => {
    setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);
  }, []);

  return (
    <header className="z-10 flex justify-between items-center bg-black px-4 md:px-10 py-8 md:py-10 h-[8vh] font-serif text-lg text-slate-200 tracking-wider">
      <div
        className={`z-11 ${
          isInitialLoad ? "opacity-0 animate-appearNormal delay-1.5s" : ""
        } hidden md:flex space-x-12`}
      >
        <Link to="/gallery">
          <PhotoLibrarySharp sx={{ fontSize: 28 }} />
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yhuj79/Benz-Configurator"
        >
          <IntegrationInstructionsSharp sx={{ fontSize: 28 }} />
        </a>
      </div>
      <div
        className={`z-11 ${
          isInitialLoad ? "opacity-0 animate-appearNormal delay-1.5s" : ""
        } md:hidden flex items-center`}
      >
        <MenuOutlined sx={{ fontSize: 28 }} />
      </div>
      <div
        className={`inset-0 flex justify-center items-center ${
          isInitialLoad ? "animate-appearZoom" : ""
        }`}
      >
        <Link to="/" className="flex flex-col items-center no-underline">
          <img className="brightness-150 w-12" alt="Logo" src={Logo} />
        </Link>
      </div>
      <div
        className={`z-11 ${
          isInitialLoad ? "opacity-0 animate-appearNormal delay-1.5s" : ""
        } hidden md:flex space-x-12`}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.co.kr/maps/search/benz"
        >
          <MapOutlined sx={{ fontSize: 28 }} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mercedes-benz.com"
        >
          <LanguageOutlined sx={{ fontSize: 28 }} />
        </a>
      </div>
      <div
        className={`z-11 opacity-0 ${
          isInitialLoad ? "opacity-0" : ""
        } md:hidden flex items-center`}
      >
        <MenuOutlined sx={{ fontSize: 28 }} />
      </div>
    </header>
  );
}

export default Header;
