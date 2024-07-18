import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} className="w-14 h-14" alt="Logo" />
        <p className="font-bold text-xl">Temple Name</p>
      </Link>
    </div>
  );
};

export default Logo;
