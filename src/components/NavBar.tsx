import { link } from "fs";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const menuItems = [
  { link: "#aboutMe", text: "About Me" },
  { link: "#projects", text: "Projects" },
  { link: "#work", text: "Work" },
  { link: "#fun", text: "Fun" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const menuRef = useRef(null);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const onClickMenu = () => {};

  return (
    <div
      className={
        "fixed top-0 left-0 w-full py-3 px-10 " +
        (navbar ? "bg-black opacity-70" : "")
      }
    >
      <div className="flex flex-row justify-between items-center h-full">
        <div id="logo">
          <a className="text-white font-bold" href="#hero">
            Timothy Huynh
          </a>
        </div>
        <div
          id="menuItemsDesktop"
          ref={menuRef}
          className="hidden lg:flex flex-row gap-3"
        >
          {menuItems.map((item) => (
            <a
              className="text-white hover:bg-gray-500 hover:text-slate-200 transition-all duration-500 py-2 px-3 rounded-md font-bold"
              href={item.link}
              key={item.text}
            >
              {item.text}
            </a>
          ))}
        </div>
        <div
          className="flex lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 stroke-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <div
        id="menuItemsMobile"
        className={
          " lg:hidden fixed bg-white top-0 right-0 bottom-0 w-full flex flex-col items-center justify-center gap-5 transition-all duration-300 " +
          (isMenuOpen ? "" : "translate-x-full")
        }
      >
        <div
          className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        {menuItems.map((item) => (
          <a
            className="text-slate-900 hover:bg-gray-500 hover:text-slate-100 transition-all duration-500 py-2 px-3 rounded-md text-3xl font-bold"
            href={item.link}
            key={item.text}
          >
            {item.text}
          </a>
        ))}
      </div>
      <div className="border-b border-white"></div>
    </div>
  );
}

export default NavBar;
