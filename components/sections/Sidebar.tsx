import React from "react";
import Socials from "../Socials";

const Sidebar = () => {
  return (
    <nav className="hidden lg:flex flex-col right-0 bottom-0 fixed mr-12 mb-12 items-end">
      <div className="flex flex-col gap-4 font-semibold text-white items-end">
        <a
          href="#home"
          className="cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200"
        >
          home
        </a>
        <a
          href="#about"
          className="cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200"
        >
          about
        </a>
        <a
          href="#experience"
          className="cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200"
        >
          experience
        </a>
        <a
          href="#"
          className="cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200"
        >
          contact
        </a>
      </div>
      <Socials />
    </nav>
  );
};

export default Sidebar;
