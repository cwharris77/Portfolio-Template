import {
  alien,
  apollo,
  apple,
  aws,
  backend,
  cybertrip,
  emotion,
  frontend,
  git,
  graphql,
  java,
  jest,
  mongodb,
  nextjs,
  nodejs,
  python,
  reactjs,
  reeldin,
  remotetasks,
  snapchat,
  sudoku,
  tailwind,
  trends,
  typescript,
  uofa,
  ux,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Engineering",
    icon: frontend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Back-End Engineering",
    icon: backend,
  },
  {
    title: "iOS Mobile Development",
    icon: apple,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Apollo Client",
    icon: apollo,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Emotion JS",
    icon: emotion,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python3",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Computer Science Student",
    company_name: "University of Arizona",
    icon: uofa,
    iconBg: "#001a5d",
    date: "August 2020 - May 2024",
  },
  {
    title: "Student Technology Assistant",
    company_name: `Housing & Residential Life ${"@"} University of Arizona`,
    icon: uofa,
    iconBg: "#e2002d",
    date: "June 2022 - May 2024",
  },
  {
    title: "AI Reviewer",
    company_name: "Remotetasks",
    icon: remotetasks,
    iconBg: "#35ce9d",
    date: "December 2023 - June 2024",
  },
  {
    title: "Software Engineer",
    company_name: "Snap Inc.",
    icon: snapchat,
    iconBg: "#FFFC00",
    date: "August 2024 - June 2025",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Replay Radar",
    description:
      "A site to help you visualize your top artists, tracks, and trends from Spotify. Discover your musical identity across time.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    info: "",
    image: trends,
    repo: "https://github.com/cwharris77/replay-radar",
    demo: "",
  },
  {
    id: "project-2",
    name: "ReeldIn",
    description: `A website dedicated to personally tailoring your movie selection experience! `,
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    info: "This project was accomplished as part of an Agile team",
    image: reeldin,
    repo: "https://github.com/jonathanhouge/ReeldIn",
    demo: "",
  },
  {
    id: "project-3",
    name: "CyberTRIP",
    description:
      "A web-based tool designed to simplify cybersecurity incident tracking, management, and prioritization in real time.",
    tags: [
      {
        name: "Flask",
        color: "white",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    info: "",
    image: cybertrip,
    repo: "https://github.com/cwharris77/cyberTRIP",
    demo: "",
  },
  {
    id: "project-4",
    name: "Alien Invasion",
    description:
      "A version of the classic Alien Invasion game created using pygame.",
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
      {
        name: "SDLC",
        color: "pink-text-gradient",
      },
    ],
    info: "",
    image: alien,
    repo: "https://github.com/cwharris77/Alien-Invasion",
    demo: "https://cwharris77.github.io/Alien-Invasion/",
  },
  {
    id: "project-5",
    name: "Sudoku",
    description: "A Sudoku game built as part of an Agile team using JavaFX",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
      {
        name: "MVC",
        color: "pink-text-gradient",
      },
    ],
    info: "",
    image: sudoku,
    repo: "https://github.com/cwharris77/sudoku/tree/55886c9c5e931ae58ac5a63fc34a648056593e31/team-project-segfault",
    demo: "",
  },
];

export { experiences, projects, services, technologies };
