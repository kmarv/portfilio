import emoji from "react-easy-emoji";

export const greetings = {
  name: "Kaaya Marvin",
  title: "Hi all, I'm Marvin",
  description:
    "I'm passionate  web developer having an experience of web applications with Python, React.js,  and Blockchain development on Ethereum, Solidity, Web3.js Framework.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "kmarv",
};

export const contact = {};

export const socialLinks = {
  url: "#",
  linkedin: "https://linkedin.com/in/kaaya-marvin-6b701b190/",
  github: "https://github.com/kmarv",
  instagram: "https://www.instagram.com/__hanzla100",
  facebook: "https://facebook.com/kaay.marvin/",
  twitter: "https://twitter.com/kaay_marv",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Blockchain",
      lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
        ),
        emoji("⚡ Building Dapps with React.js & Solidity using Web3.js"),
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos:ethereum",
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos:solidity",
        },
        {
          skillName: "Web3js",
          fontAwesomeClassname: "logos:web3js",
        },
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
        },
        {
          skillName: "Ganache",
          fontAwesomeClassname: "logos:ganache-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "50",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
  {
	Stack:"Documentation",
	progressPercentage:"70"
  }
];

export const educationInfo = [
  {
    schoolName: "Makerere University",
    subHeader: "Bachelor of Science in Software engineering",
    duration: "August 2017 - Semptember 2022",
    desc: "Attained a bachelors degree in software engineering ",
    descBullets: ["Aquired knowledge in software engineering practices"],
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "PieTech",
    companylogo: "/img/icons/common/logo.a5df5377f1b8fa1398f2.png",
    date: "Feb 2022 - present",
    desc: "I work as frontend web developer to design web based admin dashboards for mulitple apps using ReactJS,  Bootstrap, Chart.js and some other libraries.",
  },
  {
    role: "Full Stack Developer",
    company: "Kola Technologies",
    companylogo: "/img/icons/common/1596640979799.jpg",
    date: "Aug 2019 - Feb 2021",
    desc: "I worked as a full stack developer (both backend and frontend developer) using python , xml, css to build business driven web applications",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
	role:"BlockChain developer",
	company:"PIeTech Limited",
	companylogo:"/img/icons/common/logo.a5df5377f1b8fa1398f2.png",
	date:"Feb 2022 - present",
	desc:"I work as a blockchain developerin regards to writing smart contracts and  building Dapps "
  },
  {
	role :"Odoo Developer (Part time)",
	company:"Kola Technologies",
	companylogo:"/img/icons/common/1596640979799.jpg",
	date: "Sept 2022 - Present",
  }
];

export const projects = [
  {
    name: "Project BSE22-21 Blog",
    desc: "A simple blog about our final year project",
    github: "https://github.com/kmarv/project-blog22-21.git",
  },
  {
    name: "Malaria Parasite Recognition",
    desc: "With MPR, it,s easy to diagnosize malaria given blood smear images from patients",
    github: "https://github.com/kmarv/Malaria-Parasite-Detection.git",
  },
  {
    name: "User Mgmt ",
    desc: "A simple user management system built using java",
    github: "https://github.com/kmarv/Assignment.git",
  },
  {
    name: "chat App",
    desc: "a simple chat application design using reactjs and chat engine ",
    github: "https://github.com/kmarv/chatapp.git",
  },
];

export const feedbacks = [
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Kaaya Marvin",
  description: "A passionate  Web Developer and Blockchain Developer.",
  author: "Kaaya Marvin",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  url: "#",
  keywords: [
    "Kaaya",
    "Kaaya marvin",
    "@kmarv",
    "kmarv",
    "Portfolio",
    "Marvin Portfolio ",
    "Kaaya Marvin Portfolio",
  ],
};
