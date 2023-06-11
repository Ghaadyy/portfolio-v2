interface Card {
  text: string;
  title: string;
  tags: string[];
  link: string;
}

const info: Card[] = [
  {
    text: "A task manager app that allows you to set your tasks and manage them according to their current status.",
    title: "Task Manager App",
    tags: ["React.js", "TypeScript", "C#", "ASP.NET", "MySQL"],
    link: "",
  },
  {
    text: "A real-time WhatsApp clone made using C# and Windows Forms",
    title: "WhatsApp Forms",
    tags: ["C#", "WinForms"],
    link: "https://github.com/Ghaadyy/WhatsAppForms",
  },
  {
    text: "This is a Sudoku Game built with Windows Forms in C#, it was an assignment in Informatique 2.",
    title: "Sudoku Forms",
    tags: ["C#", "WinForms"],
    link: "https://github.com/Ghaadyy/Sudoku-WinForms",
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
    text: "Developed an AI that plays tic-tac-toe and can't be defeated. Implemented using the minimax algorithm. Project part of CS50's Introduction to Artificial Intelligence with Python.",
    title: "TicTacToe AI",
    tags: ["Python"],
    link: "https://github.com/Ghaadyy/tic-tac-toe-ai",
  },
  {
    title: "Portfolio v2",
    text: "The second iteration of my portfolio. I built this using Next.js, Tailwind CSS, and Typescript.",
    tags: ["Next.js", "TailwindCSS", "Typescript"],
    link: "https://github.com/Ghaadyy/portfolio-v2",
  },
  {
    text: "My first portfolio that I built using Next.js and Tailwind CSS.",
    title: "Portfolio v1",
    tags: ["Next.js", "TailwindCSS"],
    link: "https://github.com/Ghaadyy/portfolio",
  },
];

export default info;
