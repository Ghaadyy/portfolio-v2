import Head from "next/head";
import Card from "../components/Card";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Home(): JSX.Element {
  const info: { text: string }[] = [
    {
      text: "Hello my name is Ghady Youssef, I am a first year computer science student at USJ.",
    },
    { text: "I have done many projects in React.js, now I am learning C#." },
    { text: "I have done many projects in React.js, now I am learning C#." },
  ];

  return (
    <div className="main">
      <Head>
        <title>Ghady Youssef</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="flex flex-row">
        {/* <nav className="flex flex-row justify-between px-10 w-[100%] h-24 items-center absolute top-0"> */}

        <div className="flex flex-col code-div justify-center px-10 md:px-20 gap-5 w-[100vw] md:w-[90vw] overflow-x-hidden overflow-y-hidden">
          {/* <code className="text-3xl">
            console.log("Hello my name is Ghady.");
          </code> */}
          <div className="flex flex-col md:flex-row h-screen w-[100% justify-center md:justify-between">
            <div className="flex flex-col items-center md:items-start justify-center w-[100%] text-center md:text-left">
              <Typewriter
                options={{
                  strings: ["Hi, I'm Ghady."],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                  wrapperClassName:
                    "text-6xl text-white font-nunito text-center md:text-left font-semibold",
                  cursorClassName:
                    "text-6xl text-black font-nunito text-center md:text-left cursor",
                }}
              />
              <button className="bg-yellow-400 border-2 border-black py-3 px-4 my-2 w-fit btn mt-5">
                Download my CV
              </button>
            </div>
            <div className="flex justify-center items-center mt-5 md:mt-0">
              <div className="h-[200px] w-[200px] md:h-[400px] md:w-[400px] relative shadow-xl rounded-full md:rounded-xl">
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
          <div className="h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-3">
              {info.map((item) => (
                <Card text={item.text} key={(Math.random() * 100).toString()} />
              ))}
            </div>
          </div>
          <code className="text-center text-white text-sm my-5">
            Built with ❤️ by Ghady Youssef
            <br />
            All rights reserved © 2022
          </code>
        </div>
        <nav className="hidden md:flex flex-col right-0 bottom-0 h-[200px] fixed mr-12 items-center">
          <div className="flex flex-col gap-4 font-semibold text-white">
            <code className="cursor-pointer">/experience</code>
            <code className="cursor-pointer">/about</code>
            <code className="cursor-pointer">/contact</code>
          </div>
          <div className="flex flex-row gap-3 mt-4">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white w-[26px] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white w-[26px] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white w-[26px] cursor-pointer"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
