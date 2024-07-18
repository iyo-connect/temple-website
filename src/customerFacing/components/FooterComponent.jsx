import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { TbBrandYoutube, TbBrandFacebook } from "react-icons/tb";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f1f2ec] text-gray-800 py-6 px-4">
      <div className="flex sm:flex-row flex-col text-center justify-around m-2">
        <div>
          <h3 className="font-bold text-xl">Follows Us On</h3>
          <div className="icons flex sm:flex-col  justify-center items-center gap-4 py-4 ">
            <i className="text-2xl  hover:text-gray-600 cursor-pointer">
              <FaInstagram />
            </i>
            <i className="text-3xl hover:text-gray-600 cursor-pointer">
              <TbBrandYoutube />
            </i>
            <i className="text-2xl hover:text-gray-600 cursor-pointer">
              <FaXTwitter />
            </i>
            <i className="text-3xl hover:text-gray-600 cursor-pointer">
              <TbBrandFacebook />
            </i>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-xl">Quick Links</h3>
          <div className="icons flex flex-col items-center gap-4 py-4 font-bold text-gray-600 ">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link to="/gallery" className="hover:text-gray-400">
              Gallery
            </Link>
            <Link to="/donation" className="hover:text-gray-400">
              Donation
            </Link>
            <Link to="/services" className="hover:text-gray-400">
              Online Pooja
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center text-xl">Contact Us</h3>
          <div className="icons flex flex-col items-center gap-4 py-4 text-gray-600 ">
            <p>We're available{`(10 AM - 6 PM)`} </p>
            <p>Mobile: 9878685848</p>
            <p>Email: templewebsite@gmail.com</p>
          </div>
        </div>
      </div>
      <hr className="border-2 my-4"/>
      <div className="copyright text-center">
        <small>Copyrights &copy; {new Date().getFullYear()} Temple Name </small>
      </div>
    </footer>
  );
};

export default Footer;
