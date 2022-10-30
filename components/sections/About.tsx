import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="mb-20">
      <p className="text-white text-3xl font-bold mb-5 text-justify">
        about me
      </p>
      <div className="flex flex-row sm:flex-col sm:gap-5 lg:flex-row lg:items-center">
        <div className="flex flex-col max-w-xl md:mr-10">
          <p className="text-white text-xl text-justify">
            I am a first year computer science student at{" "}
            <span className="font-bold text-[navy]">
              Saint Joseph Universty of Beirut.
            </span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          {/* <br />
          <p className="text-white text-xl">
            Some of the technologies I have worked with:
            <div className="flex flex-col md:flex-row md:gap-10 text-[navy] font-semibold">
              <ul className="list-[square] list-inside">
                <li>HTML & CSS</li>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
              <ul className="list-[square] list-inside">
                <li>C#</li>
                <li>Javascript ES6+</li>
                <li>Python</li>
              </ul>
            </div>
          </p> */}
          <br />
          <p className="text-white text-xl text-justify">
            Outside of the tech world, I am a photographer. I usually go to
            spots and take some shots to post them online.
          </p>
        </div>
        <div className="hidden md:flex">
          <div className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] relative shadow-xl rounded-full md:rounded-xl">
            <Image
              priority={true}
              src="/static/IMG_7613.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-full md:rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
