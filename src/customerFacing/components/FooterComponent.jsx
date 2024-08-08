import React from "react";
import { useTranslation } from "react-i18next";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { TbBrandYoutube, TbBrandFacebook } from "react-icons/tb";

import { Link } from "react-router-dom";

const Footer = () => {
  const {t} = useTranslation()

  const {follow_us_on, quickLink_text, contact_us} = t("footer")
  const {footer_home, footer_about, footer_gallery, footer_donation, footer_services} = t("footer.quickLinks")

  const quickLinks = [
    ["/", footer_home],
    ["/about", footer_about],
    ["/gallery", footer_gallery],
    ["/donation", footer_donation],
    ["/services", footer_services],
  ];
  return (
    <footer className="bg-[#f1f2ec] text-gray-800 py-6 px-4">
      <div className="flex sm:flex-row flex-col text-center justify-around m-2">
        <div>
          <h3 className="font-bold text-xl">{follow_us_on}</h3>
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
          <h3 className="font-bold text-xl">{quickLink_text}</h3>
          <div className="icons flex flex-col items-center gap-4 py-4 font-bold text-gray-600 ">
            {quickLinks.map(([linkPath, linkName], index) => {
              return (
                <Link to={linkPath} key={index}>
                  {linkName}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center text-xl">{contact_us}</h3>
          <div className="icons flex flex-col items-center gap-4 py-4 text-gray-600 ">
            <p>We're available{`(10 AM - 6 PM)`} </p>
            <p>Mobile: 97860 58325</p>
            <p>Email: templewebsite@gmail.com</p>
          </div>
        </div>
      </div>
      <hr className="border-2 my-4" />
      <div className="copyright text-center">
        <small>Copyrights &copy; {new Date().getFullYear()} Sri Kailasanathar Temple  </small>
      </div>
    </footer>
  );
};

export default Footer;
