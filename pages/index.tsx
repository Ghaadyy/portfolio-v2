import Head from "next/head";
import Card from "../components/Card";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import React from "react";

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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
      </Head>

      <div className="flex flex-col items-center">
        <nav className="flex flex-row justify-between px-10 w-[100%] h-24 items-center absolute top-0">
          <h1 className="font-bold">Ghady</h1>
          <div className="flex flex-row gap-4 font-semibold">
            <h1>Experience</h1>
            <h1>About</h1>
            <h1>Contact</h1>
          </div>
        </nav>
        <div className="flex flex-col md:flex-row h-screen code-div justify-center w-[100%] px-10 gap-5">
          {/* <code className="text-3xl">
            console.log("Hello my name is Ghady.");
          </code> */}
          <div className="flex flex-col flex-1 justify-center">
            <Typewriter
              options={{
                strings: ['console.log("Hello, I\'m Ghady!");'],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
                wrapperClassName: "text-3xl font-montserrat code-main",
                cursorClassName: "text-3xl font-montserrat code-main",
              }}
            />
            <button className="bg-yellow-400 border-2 border-black py-3 px-4 my-2 w-fit btn mt-5">
              Download my CV
            </button>
          </div>
          <div className="hidden md:flex -z-10 justify-center items-center flex-1">
            <div className="h-[400px] w-[400px] relative shadow-xl">
              <Image
                priority={true}
                src="/static/IMG_7613.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-3">
          {info.map((item) => (
            <Card text={item.text} key={(Math.random() * 100).toString()} />
          ))}
        </div>
        <code className="text-center text-white text-sm my-5">
          Built with ❤️ by Ghady Youssef
          <br />
          All rights reserved © 2022
        </code>
      </div>
    </div>
  );
}
