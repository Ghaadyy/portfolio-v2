import Head from "next/head";
import Card from "../components/Card";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import React from "react";
import Socials from "../components/Socials";

const Home = () => {
  // create a function that calls an api and returns the data
  const getProjects = async () => {
    const res = await fetch("https://api.github.com/users/Ghaadyy/repos");
    const data = await res.json();
    return data;
  };

  // const projects = await getProjects();
  // console.log(projects);

  const info: { text: string; title: string }[] = [
    {
      text: "Hello my name is Ghady Youssef, I am a first year computer science student at USJ.",
      title: "Livent App",
    },
    {
      text: "My first portfolio that got me accepted into 10 universities in France. I built it before applying to these universities and I used NextJS to create it.",
      title: "Livent App",
    },
    {
      text: "I have created a guessing the word game and tictactoe in C# as assignments in my first CS course.",
      title: "Livent App",
    },
    {
      text: "Zoey the Book App is a project that I contributed to during summer to help students exchange books before the begining of the school year.",
      title: "Livent App",
    },
    {
      text: "Zoey the Book App is a project that I contributed to during summer to help students exchange books before the begining of the school year.",
      title: "Livent App",
    },
    {
      text: "Zoey the Book App is a project that I contributed to during summer to help students exchange books before the begining of the school year.",
      title: "Livent App",
    },
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
        />
        <meta name="theme-color" content="#21c4b6" />
      </Head>

      <div className="App flex flex-col">
        <div className="flex flex-col code-div justify-center px-10 md:pl-40 gap-5 w-[100vw] md:w-[90vw] overflow-x-hidden overflow-y-hidden">
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
                <span className="font-bold text-[navy]">Beirut, Lebanon.</span>{" "}
                <br />I have great interest in software engineering, web
                development, artificial intelligence, and everything in between.
              </p>
              <button className="bg-yellow-400 border-2 border-black py-3 px-4 my-2 w-fit btn mt-5">
                Check out my CV
              </button>
            </div>
          </div>
          <section className="mb-20">
            <p className="text-white text-3xl font-bold mb-5 text-justify">
              about me
            </p>
            <div className="flex flex-row items-center">
              <p className="text-white max-w-xl text-xl">
                I am a first year computer science student at{" "}
                <span className="font-bold text-[navy]">
                  Saint Joseph's Universty of Beirut.
                </span>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="hidden md:flex mt-5 md:mt-0">
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
          <section className="flex flex-col mb-5">
            <p className="text-white text-3xl font-bold mb-5 text-justify">
              experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {info.map((item) => (
                <Card
                  text={item.text}
                  key={(Math.random() * 100).toString()}
                  title={item.title}
                />
              ))}
            </div>
          </section>
        </div>
        <div className="flex flex-col items-center my-12">
          <code className="text-center text-white text-sm">
            Built with ❤️ by Ghady Youssef
            <br />
            All rights reserved © 2022
          </code>
          <div className="flex md:hidden">
            <Socials />
          </div>
        </div>
        <nav className="hidden md:flex flex-col right-0 bottom-0 fixed mr-12 mb-12 items-end">
          <div className="flex flex-col gap-4 font-semibold text-white items-end">
            <p className="cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200">
              home
            </p>
            <p className="cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200">
              about
            </p>
            <p className="cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200">
              experience
            </p>
            <p className="cursor-pointer hover:text-[navy] transition-all ease-in-out duration-200">
              contact
            </p>
          </div>
          <Socials />
        </nav>
      </div>
    </div>
  );
};

export default Home;
