import React from "react";
import Head from "next/head";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Sidebar from "../components/sections/Sidebar";

const Home = () => {
  return (
    <div className="main">
      <Head>
        <title>Ghady Youssef</title>
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
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#21c4b6" />
      </Head>

      <div className="App flex flex-col">
        <div className="flex flex-col code-div justify-center px-10 lg:pl-40 gap-5 w-[100vw] lg:w-[90vw] overflow-x-hidden overflow-y-hidden">
          {/* Header Section */}
          <Header />

          {/* About Me Section */}
          <About />

          {/* Experience Section */}
          <Experience />
        </div>

        {/* Footer */}
        <Footer />

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
