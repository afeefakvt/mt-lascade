import  { useState } from "react";
import {  HiArrowUpRight } from "react-icons/hi2";
import { HiX, HiOutlineMenu, } from "react-icons/hi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Our Services",
    "How to Start",
    "Reviews",
    "Documents",
    "FAQ",
  ];

  return (
    <header className="">
      <nav
        className="
          max-w-[1220px] mx-auto flex items-center justify-between
          pt-[32px] px-[10px] py-[10px] gap-[32px]
          h-[90px]
        "
      >
        {/* Logo pill */}
        <div className="flex items-center bg-white rounded-[60px] px-[27px] py-[15px] gap-[12px]">
          <img
            src={logo}
            alt="Visaslots"
            className="h-[40px] w-auto object-contain"
          />
        </div>

        {/* Desktop nav links */}
        <ul
          className="
            hidden md:flex items-center justify-between
            w-[652px] h-[70px] rounded-[60px]
            bg-white px-[32px] py-[10px]
          "
        >
          {navLinks.map((link) => (
            <li
              key={link}
              className="font-sen font-medium text-[14px] leading-[26px] uppercase text-[#0F3D2E] cursor-pointer hover:opacity-80"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="
            hidden md:flex items-center justify-between
            bg-[#F66F4D] w-[242px] h-[70px] rounded-[150px]
            py-[9px] pr-[9px] pl-[30px] gap-[12px]
            text-white font-sen font-medium text-[14px] uppercase
            hover:bg-[#e65b3c] transition
          "
        >
          Try Visabot
          <span className="flex items-center justify-center border border-white rounded-full w-[32px] h-[32px]">
            <HiArrowUpRight className="w-[16px] h-[16px]" />
          </span>
        </button>

        {/* Hamburger Icon (mobile) */}
        <button
          className="md:hidden text-[#0F3D2E]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className="w-7 h-7" />
          ) : (
            <HiOutlineMenu className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 z-50">
          <ul className="flex flex-col items-center py-6 gap-4">
            {navLinks.map((link) => (
              <li
                key={link}
                className="font-sen font-medium text-[14px] leading-[26px] uppercase text-[#0F3D2E] cursor-pointer hover:opacity-80"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </li>
            ))}
            <button
              className="
                flex items-center justify-between
                bg-[#F66F4D] w-[200px] rounded-[150px]
                py-[9px] pr-[9px] pl-[30px] gap-[12px]
                text-white font-sen font-medium text-[14px] uppercase
                hover:bg-[#e65b3c] transition
              "
              onClick={() => setIsOpen(false)}
            >
              Try Visabot
              <span className="flex items-center justify-center border border-white rounded-full w-[28px] h-[28px]">
                <HiArrowUpRight className="w-[14px] h-[14px]" />
              </span>
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
