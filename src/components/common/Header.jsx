import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/images/img_group_10.svg"
                alt="Company Logo"
                className="w-[40px] h-[47px] sm:w-[50px] sm:h-[58px] md:w-[60px] md:h-[70px]"
              />
            </Link>
          </div>

          {/* Single Menu Button for ALL screens */}
          <button
            className="p-2 mt-[18px]"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(true)}
          >
            <div className="flex items-center gap-[8px]">
              <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-light text-global-10">
                Menu
              </span>
              <img
                src="/images/img_group_9.svg"
                alt="Menu Icon"
                className="w-[30px] h-[10px] sm:w-[34px] sm:h-[11px] md:w-[38px] md:h-[12px]"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#1E1E1E] text-white flex flex-col items-center justify-center z-[9999]">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {/* Menu Links */}
          <ul className="space-y-6 text-[35px] md:text-[50px] font-anton text-center">
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/">HOME</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/about">ABOUT</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/services">SERVICES</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/casestudies">CASE STUDIES</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/testimonial">TESTIMONIALS</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/team">OUR TEAM</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
