import {
  IntegrationInstructionsSharp,
  Subscriptions,
  MapOutlined,
  LanguageOutlined,
  ArrowForwardIosSharp,
} from "@mui/icons-material";

// Header 768px 미만 화면 MenuBar 컴포넌트
function MenuBar({ menuOpen, menuClose }) {
  return (
    <div
      className={`md:hidden z-20 px-4 py-12 absolute w-full h-[100vh] bg-black ${
        menuOpen && !menuClose ? "animate-slideInLeft" : ""
      } ${menuClose ? "animate-slideRight" : ""} ${
        !menuOpen && !menuClose ? "hidden" : ""
      }`}
    >
      <a
        className="flex justify-between items-center mb-6 text-desc text-lg"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/yhuj79/Benz-Configurator"
      >
        <div className="flex items-center">
          <IntegrationInstructionsSharp sx={{ fontSize: 28 }} />
          <p className="ml-2 leading-7">Repository</p>
        </div>
        <ArrowForwardIosSharp sx={{ fontSize: 16 }} />
      </a>
      <a
        className="flex justify-between items-center mb-6 text-desc text-lg"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/@MercedesBenz/featured"
      >
        <div className="flex items-center">
          <Subscriptions sx={{ fontSize: 28 }} />
          <p className="ml-2 leading-7">YouTube</p>
        </div>
        <ArrowForwardIosSharp sx={{ fontSize: 16 }} />
      </a>
      <a
        className="flex justify-between items-center mb-6 text-desc text-lg"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.co.kr/maps/search/benz"
      >
        <div className="flex items-center">
          <MapOutlined sx={{ fontSize: 28 }} />
          <p className="ml-2 leading-7">Location</p>
        </div>
        <ArrowForwardIosSharp sx={{ fontSize: 16 }} />
      </a>
      <a
        className="flex justify-between items-center mb-6 text-desc text-lg"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.mercedes-benz.com"
      >
        <div className="flex items-center">
          <LanguageOutlined sx={{ fontSize: 28 }} />
          <p className="ml-2 leading-7">Global Website</p>
        </div>
        <ArrowForwardIosSharp sx={{ fontSize: 16 }} />
      </a>
    </div>
  );
}

export default MenuBar;
