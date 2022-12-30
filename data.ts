interface Card {
  text: string;
  title: string;
  tags: string[];
  link: string;
}

const info: Card[] = [
  {
    text: "My first portfolio that I built using Next.js and Tailwind CSS.",
    title: "Portfolio v1",
    tags: ["Next.js", "TailwindCSS"],
    link: "https://github.com/Ghaadyy/portfolio",
  },
  {
    text: "Zoey the Book App is a project that I contributed to during summer to help students exchange books before the begining of the school year.",
    title: "Zoey the Book App",
    tags: ["React Native", "MongoDB", "Node.js", "Express.js"],
    link: "https://github.com/Posenega/Zoey",
  },
  {
    title: "Webinars App",
    text: "A web app that allows users to create and join webinars. This project was part of a competition that I participated in (LAU Web Development Competition 2021).",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Ghaadyy/Webinars",
  },
  {
    text: "One of the assignments in CS50AI was to build an AI that plays tictactoe. I implemented the minimax algorithm to make an unbeatable AI in tictactoe.",
    title: "TicTacToe AI",
    tags: ["Python"],
    link: "",
  },
  {
    title: "Portfolio v2",
    text: "The second iteration of my portfolio. I built this using Next.js, Tailwind CSS, and Typescript.",
    tags: ["Next.js", "TailwindCSS", "Typescript"],
    link: "https://github.com/Ghaadyy/portfolio-v2",
  },
];

export default info;
