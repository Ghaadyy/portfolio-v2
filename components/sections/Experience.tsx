import React from "react";
import info from "../../data";
import Card from "../Card";

const Experience = () => {
  return (
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
  );
};

export default Experience;
