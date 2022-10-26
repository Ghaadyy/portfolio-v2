import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="flex flex-row gap-3 mt-4 items-center justify-center">
      <a href="https://github.com/Ghaadyy/">
        <FontAwesomeIcon
          icon={faGithub}
          className="text-white w-[26px] cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200"
        />
      </a>
      <a href="https://instagram.com/ghaadyy">
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-white w-[26px] cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200"
        />
      </a>
      <a href="https://linkedin.com/in/ghadyyoussef/">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-white w-[26px] cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200"
        />
      </a>
    </div>
  );
};

export default Socials;
