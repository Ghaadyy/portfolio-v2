import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="border-[1px] border-black bg-white min-w-[250px] min-h-[250px] p-3 flex flex-col custom-shadow">
      <div className="flex flex-row justify-between items-center mb-3">
        <code className="text-[navy] text-xl">{title}</code>
        <a href="https://github.com/Ghaadyy/">
          <FontAwesomeIcon
            icon={faGithubSquare}
            className="text-[navy] w-[36px] cursor-pointer"
          />
        </a>
      </div>
      <p className="text-justify">{text}</p>
    </div>
  );
};

export default Card;
