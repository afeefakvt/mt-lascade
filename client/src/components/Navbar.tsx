import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiX, HiOutlineMenu } from "react-icons/hi";
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
        <div className="flex items-center bg-white rounded-[60px] px-[27px] py-[15px] gap-[12px]">
          <img
            src={logo}
            alt="Visaslots"
            className="h-[40px] w-auto object-contain"
          />
        </div>

<ul
  className="
    hidden md:flex items-center justify-center flex-wrap
    bg-white rounded-[60px]
    h-auto lg:h-[70px]
    max-w-full xl:max-w-[700px]

    /* Default (≥768px) */
    gap-6 px-[20px] py-[8px]

    /* Medium desktops / laptops (≥1024px) */
    lg:gap-8 lg:px-[28px] lg:py-[9px]

    /* Large desktop (≥1470px) */
    xl:gap-10 xl:px-[36px] xl:py-[10px]
  "
>
  {navLinks.map((link) => (
    <li
      key={link}
      className="
        font-sen font-medium 
        text-[12px] md:text-[13px] lg:text-[14px]
        leading-[22px] lg:leading-[26px]
        uppercase text-[#0F3D2E]
        cursor-pointer hover:opacity-80
      "
    >
      {link}
    </li>
  ))}
</ul>

        <button
          className="
            hidden md:flex items-center justify-between
            bg-[#F66F4D] max-w-[242px] h-[70px] rounded-[150px]
            px-[30px] gap-[12px]
            text-white font-sen font-medium text-[14px] uppercase
            hover:bg-[#e65b3c] transition
          "
        >
          Try Visabot
          <span className="flex items-center justify-center border border-white rounded-full w-[32px] h-[32px]">
            <HiArrowUpRight className="w-[16px] h-[16px]" />
          </span>
        </button>
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
