import { link } from "fs";
import Link from "next/link";
import React from "react";

const menuItems = [
  { link: "#aboutMe", text: "About Me" },
  { link: "#projects", text: "Projects" },
  { link: "#work", text: "Work" },
  { link: "#fun", text: "Fun" },
];

function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-10 px-10">
      <div className="flex flex-row justify-between items-center h-full">
        <div id="logo">Timothy Huynh</div>
        <div id="menuItems" className="flex flex-row gap-3">
          {menuItems.map((item) => (
            <a
              className="hover:bg-gray-500 transition-all duration-500"
              href={item.link}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
