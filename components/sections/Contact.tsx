import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col justify-center text-center gap-3 my-40">
        <h1 className="text-white font-bold text-2xl">Get in touch!</h1>
        <p className="text-white text-lg">
          Feel free to contact me via email or LinkedIn.
        </p>
        <div className="flex justify-center">
          <a
            className=""
            href="mailto:ghadyyi@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="bg-yellow-400 border-2 border-black py-3 px-4 btn">
              <p>Say Hello!</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
