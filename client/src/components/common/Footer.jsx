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
      <Link
        to="/"
        className="flex flex-col items-center mt-5 mb-2 no-underline"
      >
        <img className="brightness-150 w-12 filter" alt="Logo" src={Logo} />
      </Link>
      <div className="flex flex-wrap justify-center opacity-70">
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
