import {
  alien,
  apollo,
  apple,
  aws,
  azure,
  backend,
  cybertrip,
  diffdragon,
  emotion,
  frontend,
  gcp,
  git,
  graphql,
  java,
  jest,
  mongodb,
  nextjs,
  nextview,
  nodejs,
  python,
  reactjs,
  reeldin,
  remotetasks,
  snapchat,
  stl,
  sudoku,
  tailwind,
  trends,
  typescript,
  uofa,
  ux,
  wiki,
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
  {
    name: "Microsoft Azure",
    icon: azure,
  },
  {
    name: "Google Cloud Platform",
    icon: gcp,
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
    date: "August 2024 - July 2025",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Replay Radar",
    description:
      "Visualize your top artists, tracks, and trends from Spotify. Discover your musical identity across time.",
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
    demo: "https://replay-radar.vercel.app/",
  },
  {
    id: "project-2",
    name: "NextView",
    description: "A small scale YouTube clone.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "GCP",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    info: "",
    image: nextview,
    repo: "https://github.com/cwharris77/nextview",
    demo: "https://next-view-web-client-219398653361.us-west1.run.app/",
  },
  {
    id: "project-3",
    name: "ReeldIn",
    description: `A website dedicated to personally tailoring your movie selection experience! `,
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Azure",
        color: "pink-text-gradient",
      },
    ],
    info: "This project was accomplished as part of an Agile team",
    image: reeldin,
    repo: "https://github.com/jonathanhouge/ReeldIn",
    demo: "",
  },
  {
    id: "project-4",
    name: "DiffDragon",
    description:
      "An AI-powered GitHub app that automatically reviews pull requests, suggests improvements, and enhances code quality through intelligent, continuous analysis.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Nest.js",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "GitHub App",
        color: "pink-text-gradient",
      },
    ],
    info: "",
    image: diffdragon,
    repo: "https://github.com/cwharris77/pr-review-bot",
    demo: "",
  },
  {
    id: "project-5",
    name: "CyberTRIP",
    description:
      "A web-based tool designed to simplify cybersecurity incident tracking, management, and prioritization in real time.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
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
    id: "project-6",
    name: "Alien Invasion",
    description:
      "A version of the classic Alien Invasion game created using pygame.",
    tags: [
      {
        name: "Python",
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
    id: "project-7",
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
    repo: "https://github.com/cwharris77/sudoku",
    demo: "",
  },
  {
    id: "project-8",
    name: "Wiki Racer",
    description:
      "An implementation of the Wiki Ladder game where the challenge is to navigate from a designated start Wikipedia page to a predetermined end page using only hyperlinks within the articles in the quickest time.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Memoization",
        color: "green-text-gradient",
      },
      {
        name: "Multi-Threading",
        color: "pink-text-gradient",
      },
    ],
    info: "",
    image: wiki,
    repo: "https://github.com/cwharris77/WikiRacer",
    demo: "",
  },
  {
    id: "project-9",
    name: "STL File Creator",
    description: `A C program for creating and manipulating 3D scenes and exporting them to STL files in ASCII or binary format.`,
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Data Structures",
        color: "green-text-gradient",
      },
      {
        name: "STL",
        color: "pink-text-gradient",
      },
    ],
    info: "This project was accomplished as part of an Agile team",
    image: stl,
    repo: "https://github.com/cwharris77/STL-Creator",
    demo: "",
  },
];

export { experiences, projects, services, technologies };
