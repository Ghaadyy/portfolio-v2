import React from "react";
import Head from "next/head";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Sidebar from "../components/sections/Sidebar";
import Contact from "../components/sections/Contact";

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
        <meta name="theme-color" content="#084c61" />
        <meta property="og:site_name" content="Ghady Youssef" />
        <meta property="og:title" content="Ghady Youssef" />
        <meta
          property="og:description"
          content="Computer Science student at USJ"
        />
        <meta
          property="og:image"
          content="https://ghady.vercel.app/static/avatar-256.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://ghady.me/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App flex flex-col">
        <div className="justify-center px-10 md:px-15 lg:px-30 xl:px-40 gap-5">
          {/* Header Section */}
          <Header />

          {/* About Me Section */}
          <About />

          {/* Experience Section */}
          <Experience />

          {/* Contact me Section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>

        {/* Sidebar */}
        <div className="items-end right-0 left-auto bottom-0 fixed">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
