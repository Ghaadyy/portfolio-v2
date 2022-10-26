import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-[100% items-center justify-center md:justify-between">
      <div className="flex flex-col items-center md:items-start justify-center w-[100%] text-center md:text-left max-w-xl">
        <Typewriter
          options={{
            strings: "Hi, I'm Ghady.",
            autoStart: true,
            loop: true,
            skipAddStyles: true,
            wrapperClassName:
              "text-5xl text-white text-center md:text-left font-semibold",
            cursorClassName:
              "text-5xl text-black text-center md:text-left cursor",
          }}
        />
        <p className="mt-5 text-white font-semibold text-lg text-center md:text-justify mr-5">
          I'm a first year computer science student based in{" "}
          <span className="font-bold text-[navy]">Beirut, Lebanon.</span> <br />
          I have great interest in software engineering, web development,
          artificial intelligence, and everything in between.
        </p>
        <button className="bg-yellow-400 border-2 border-black py-3 px-4 my-2 w-fit btn mt-5">
          Check out my CV
        </button>
      </div>
    </div>
  );
};

export default Header;
