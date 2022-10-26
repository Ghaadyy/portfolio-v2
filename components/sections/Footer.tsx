import React from "react";
import Socials from "../Socials";

const Footer = () => {
  return (
    <div className="flex flex-col items-center my-12">
      <code className="text-center text-white text-sm">
        Built with ❤️ by Ghady Youssef
        <br />
        All rights reserved © 2022
      </code>
      <div className="flex md:hidden">
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
