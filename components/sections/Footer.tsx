import React from "react";
import Socials from "../Socials";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center my-12">
      <code className="text-center text-white text-sm">
        Built with ❤️ by Ghady Youssef
        <br />
        <span className="text-[rgb(255,255,255,0.6)]">
          All rights reserved &copy; {year}
        </span>
      </code>
      <div className="flex md:hidden">
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
