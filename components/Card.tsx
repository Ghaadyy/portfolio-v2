import React from "react";

export default function Card({ text }): JSX.Element {
  return (
    <div className="border-[1px] border-black bg-white w-[250px] min-h-[250px] p-3 flex flex-col custom-shadow justify-between cursor-pointer">
      <p>{text}</p>
      {text && (
        <button className="bg-yellow-400 border-2 border-black py-3 px-4 my-2 w-fit">
          <code>Learn More</code>
        </button>
      )}
    </div>
  );
}
