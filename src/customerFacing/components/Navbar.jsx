// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

function Navbar() {
  const {t} = useTranslation()

  const {home, about, events, services, donation, gallery, contact_us} = t("navLinks")
  const tamilLang = localStorage.getItem('i18nextLng')

  const menuLinks = [
    [home, "/"],
    [about, "/about"],
    [events, "/events"],
    [services, "/services"],
    [donation, "/donation"],
    [gallery, "/gallery"],
    [contact_us, "/contact"],
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-600  text-white p-4">
      <div className="md:container mx-auto  flex items-center justify-between ">
        <Logo />
        
          <LanguageSelector />
          <div className="hidden lg:flex space-x-4">
            {menuLinks.map(([title, url], index) => (
              <Link
                to={url}
                key={index}
                className={`rounded px-3 py-2 text-slate-700 font-medium hover:bg-gray-900 hover:text-gray-50 ${tamilLang === 'ta' && "text-sm" }`  }
              >
                {title}
              </Link>
            ))}
          </div>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {/* <Menu className={menuOpen ? "text-red-800" :"" }/> */}
            {menuOpen ? <X className="text-red-800" /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden flex flex-col  gap-2 ">
            {/* Mobile menu links */}
            {menuLinks.map(([title, url], index) => (
              <Link
                to={url}
                key={index}
                className="rounded   px-3 py-2 text-slate-700 font-medium text-center hover:bg-gray-900 hover:text-gray-50"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {title}
              </Link>
            ))}
          </div>
        )}
    </nav>
  );
}

export default Navbar;
