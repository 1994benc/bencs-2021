import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const hasDarkMode = localStorage.getItem("dark");
    const root = document.documentElement;
    if (hasDarkMode === "true") {
      if (!root.classList.contains("dark")) {
        root.classList.add("dark");
        setDarkMode(true);
      }
    } else {
      if (root.classList.contains("dark")) {
        root.classList.remove("dark");
        setDarkMode(false);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.removeItem("dark");
      setDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("dark", "true");
      setDarkMode(true);
    }
  };
  return (
    <div className="mx-auto sticky mt-10 max-w-3xl py-3 px-5 bg-black dark:bg-gray-900 text-white rounded flex justify-between items-center">
      <Link href="/">
        <a className="font-bold hover:text-yellow-300">Ben Chomsang 👋</a>
      </Link>
      <button className="cursor-pointer outline-none hover:rotate-45 transition-all ease-in-out duration-200 focus:outline-none" onClick={toggleDarkMode}>
        {darkMode ? <SunIcon></SunIcon> : <MoonIcon></MoonIcon>}
      </button>
    </div>
  );
};
