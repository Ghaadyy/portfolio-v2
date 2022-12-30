import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Card {
  text: string;
  title: string;
  tags: string[];
  link: string;
}

const Card = ({ title, text, tags, link }: Card) => {
  return (
    <div className="border-[1px] border-black bg-white min-h-[300px] p-3 flex flex-col custom-shadow justify-between">
      <div>
        <div className="flex flex-row justify-between items-center mb-3">
          <code className="text-[#2a4494] text-xl">{title}</code>
          <a href={link}>
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="text-[#2a4494] w-[36px] cursor-pointer"
            />
          </a>
        </div>
        <p className="text-justify">{text}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-x-2 text-xs sm:text-sm text-[#2a4494]">
        {tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
