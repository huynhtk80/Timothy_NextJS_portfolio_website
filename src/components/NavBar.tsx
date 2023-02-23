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
    <div className="fixed top-0 left-0 w-full py-3 px-10 bg-gradient-to-br from-blue-200 via-blue-400 to-blue-500">
      <div className="flex flex-row justify-between items-center h-full">
        <div id="logo">
          <a href="#hero">Timothy Huynh</a>
        </div>
        <div id="menuItems" className="flex flex-row gap-3">
          {menuItems.map((item) => (
            <a
              className="bg-blue-600 hover:bg-gray-500 hover:text-slate-200 transition-all duration-500 py-2 px-3 rounded-md shadow-lg font-bold"
              href={item.link}
              key={item.text}
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
