"use client";
import React from "react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "About",
    page: "/aboutus",
  },
  {
    label: "Skills",
    page: "/skills",
  },
  {
    label: "Projects",
    page: "/projects",
  },
  {
    label: "Contact",
    page: "/contact",
  },
];

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto  px-4 bg-white  sm:px-20 fixed top-0 z-50 shadow  dark:bg-stone-900 dark:border-b  dark:border-stone-600">
      <div className="justify-between md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <div className="container flex items-center space-x-2 dark:text-white ">
                <h2 className="text-3xl font-extrabold bg-gradient-to-br from-slate-600 to-orange-500 bg-clip-text text-transparent">
                  Mukunda
                </h2>
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-500"
                    }
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </a>
                );
              })}

              <button
                onClick={() =>
                  setTheme(currentTheme === "dark" ? "light" : "dark")
                }
                className="p-2 rounded-xl"
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {currentTheme === "dark" ? (
                  <RiSunLine size={20} color="white" />
                ) : (
                  <RiMoonFill size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
