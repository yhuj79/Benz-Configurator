import { Link } from "react-router-dom";

import Logo from "../../assets/main/logo.webp";

// Footer 컴포넌트
function Footer() {
  return (
    <footer className="bg-gray-700 py-12 text-center text-desc">
      <div className="opacity-70 mx-auto mt-2 w-11/12 md:w-3/6 text-xs md:text-base">
        <p>
          This site is a project for practicing web development. Product Image
          All rights reserved Mercedes-Benz. Information specified on this site
          may differ from actual information. If you want to find real
          information, visit the Mercedes Benz global site.
        </p>
      </div>
      <div className="flex justify-center mt-5 mb-2">
        <Link to="/" className="flex flex-col w-12 no-underline">
          <img className="brightness-150" alt="Logo" src={Logo} />
        </Link>
      </div>
      <div className="justify-center gap-x-8 gap-y-4 grid grid-cols-2 md:grid-cols-4 opacity-70 mt-5 text-xs md:text-base">
        <p className="mx-2">Provider</p>
        <p className="mx-2">Legal Notice</p>
        <p className="mx-2">Cookies</p>
        <p className="mx-2">Privacy Statement</p>
        <p className="mx-2">Newsfeed (RSS)</p>
        <p className="mx-2">Contact</p>
        <p className="mx-2">Careers</p>
        <p className="mx-2">Investor Relations</p>
      </div>
    </footer>
  );
}

export default Footer;
