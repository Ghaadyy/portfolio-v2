import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="mb-20">
      <p className="text-white text-3xl font-bold mb-5 text-justify">
        about me
      </p>
      <div className="flex flex-row sm:flex-col sm:gap-5 lg:flex-row lg:items-center">
        <div className="flex flex-col max-w-xl md:mr-10">
          <p className="text-white text-xl text-justify">
            I am a first year computer science student at{" "}
            <span className="font-bold text-[navy]">
              Saint Joseph Universty of Beirut.
            </span>
            <br />I have worked with many technologies, like{" "}
            <span className="font-bold text-[navy]">React.js</span> to create
            web applications. Currently, I am learning{" "}
            <span className="font-bold text-[navy]">C#</span> and{" "}
            <span className="font-bold text-[navy]">.NET</span> to create
            desktop applications in my computer science courses.
            <br />I have great interest in software engineering. My goal is to
            be able to create efficient software, greatly designed and easy to
            use.
          </p>
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
