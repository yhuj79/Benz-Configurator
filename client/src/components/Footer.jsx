import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";

function Footer() {
  return (
    <footer className="bg-gray-700 text-center py-12">
      <div className="w-3/5 mx-auto mt-2 opacity-70">
        <p>
          This site is a project for practicing web development. Product Image
          All rights reserved Mercedes-Benz. Follow us and use the following
          social media platforms to get in contact with us and to share your
          passion for the brand, products and services of Mercedes-Benz.
        </p>
      </div>
      <Link
        to="/"
        className="flex flex-col items-center no-underline mt-5 mb-2"
      >
        <img className="w-12 filter brightness-150" alt="Logo" src={Logo} />
      </Link>
      <div className="flex justify-center flex-wrap opacity-70">
        <p className="mx-12 my-5">Provider</p>
        <p className="mx-12 my-5">Legal Notice</p>
        <p className="mx-12 my-5">Cookies</p>
        <p className="mx-12 my-5">Privacy Statement</p>
        <p className="mx-12 my-5">Newsfeed (RSS)</p>
        <p className="mx-12 my-5">Contact</p>
        <p className="mx-12 my-5">Careers</p>
        <p className="mx-12 my-5">Investor Relations</p>
      </div>
    </footer>
  );
}

export default Footer;
