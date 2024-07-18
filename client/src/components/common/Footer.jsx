import { Link } from "react-router-dom";

import Logo from "../../assets/main/logo.webp";

function Footer() {
  return (
    <footer className="bg-gray-700 py-12 text-center">
      <div className="opacity-70 mx-auto mt-2 w-3/5">
        <p>
          This site is a project for practicing web development. Product Image
          All rights reserved Mercedes-Benz. Follow us and use the following
          social media platforms to get in contact with us and to share your
          passion for the brand, products and services of Mercedes-Benz.
        </p>
      </div>
      <div className="flex justify-center mt-5 mb-2">
        <Link to="/" className="flex flex-col w-12 no-underline">
          <img className="brightness-150 filter" alt="Logo" src={Logo} />
        </Link>
      </div>
      <div className="justify-center gap-x-12 gap-y-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 opacity-70 mt-5">
        <p className="mx-12">Provider</p>
        <p className="mx-12">Legal Notice</p>
        <p className="mx-12">Cookies</p>
        <p className="mx-12">Privacy Statement</p>
        <p className="mx-12">Newsfeed (RSS)</p>
        <p className="mx-12">Contact</p>
        <p className="mx-12">Careers</p>
        <p className="mx-12">Investor Relations</p>
      </div>
    </footer>
  );
}

export default Footer;
