// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

function Navbar() {

    const menuLinks = [
        ['Home', '/'],
        ['About', '/about'],
        ['Events', '/events'],
        ['Services', '/services'],
        ['Donation', '/donation'],
        ['Gallery', '/gallery'],
        ['Contact Us', '/contact'],
      ]

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-600  text-white p-4">
      <div className="md:container mx-auto  flex items-center justify-between">
        <Logo />
        <div className="hidden lg:flex space-x-4">
            {
                menuLinks.map(([title, url], index)=>(
                    <Link to={url} key={index} className="rounded px-3 py-2 text-slate-700 font-medium hover:bg-gray-900 hover:text-gray-50">{title}</Link>
                )
                  )
            }

        </div>
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* <Menu className={menuOpen ? "text-red-800" :"" }/> */}
          {menuOpen ? <X className='text-red-800'/> : <Menu/>}
          
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-2">
          
          {/* Mobile menu links */}
          {
                menuLinks.map(([title, url],index)=>(
                    <Link to={url} key={index} className="rounded   px-3 py-2 text-slate-700 font-medium text-center hover:bg-gray-900 hover:text-gray-50" onClick={() => setMenuOpen(!menuOpen)}>{title}</Link>
                )
                  )
            }
        </div>
     )} 
    </nav>
  );
}

export default Navbar;
