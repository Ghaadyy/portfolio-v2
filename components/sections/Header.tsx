import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row h-screen w-[100%] items-center justify-center md:justify-between"
    >
      <div className="flex flex-col items-center md:items-start justify-center w-[100%] text-center md:text-left max-w-xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Hi, I'm <span class='font-bold text-[#ffc857]'>Ghady.</span>"
              )
              .start();
          }}
          options={{
            autoStart: true,
            skipAddStyles: true,
            wrapperClassName:
              "text-5xl text-white text-center md:text-left font-semibold",
            cursorClassName:
              "text-5xl text-[#ffc300] text-center md:text-left cursor",
          }}
        />
        <p className="mt-5 text-white font-semibold text-lg text-center md:text-justify md:mr-5">
          I'm a first year computer science student based in{" "}
          <span className="font-bold text-[#ffc857]">Beirut, Lebanon.</span>{" "}
          <br />I have great interest in software engineering, web development,
          artificial intelligence and everything in between.
        </p>
        <a href="/static/CV.pdf" download="CV.pdf">
          <button className="bg-[#ffc857] border-2 border-black py-3 px-4 my-2 w-fit btn mt-5">
            Check out my CV
          </button>
        </a>
      </div>
    </section>
  );
};

export default Header;
