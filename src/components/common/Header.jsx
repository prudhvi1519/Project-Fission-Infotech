import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50 bg-[#1D1D1D]">
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

          {/* Menu Button */}
          <button
            className="p-2 mt-[18px]"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
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

      {/* Dropdown Menu */}
     {menuOpen && (
  <div className="absolute top-0 left-0 w-full  bg-[#1E1E1E]/95 text-white z-[9999] flex items-center justify-center animate-slideDown">
    {/* Close Button */}
    <button
      className="absolute top-6 right-6 text-white text-2xl"
      onClick={() => setMenuOpen(false)}
    >
      ✕
    </button>

    {/* Menu Links */}
    <ul className="space-y-4 text-[20px] sm:text-[24px] md:text-[28px] font-anton text-center mt-14 mb-4">
      <li onClick={() => setMenuOpen(false)}>
        <Link to="/">HOME</Link>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <Link to="/about">ABOUT</Link>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <Link to="/service">SERVICES</Link>
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


      {/* Tailwind animation */}
      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
