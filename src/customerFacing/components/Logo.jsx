import React from "react";
import logo from "../../assets/images/shivaLogo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const {t} = useTranslation()
  const templeName = t("templeName")
  const temps = templeName.split(" ")

  return (
    <div>
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} className="w-14 h-14" alt="Logo" />

        <p className="flex flex-col md:font-bold font-semibold lg:text-base text-sm "><span>{temps[0]} {temps[1]}</span> <span>{temps[2]}</span></p>
      </Link>
    </div>
  );
};

export default Logo;
