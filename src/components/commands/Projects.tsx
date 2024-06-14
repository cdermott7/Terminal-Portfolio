import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss that stand testament to
        my talents:
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "This Website",
    desc: "My portfolio website styled after the terminal to the best of my abilities.",
    url: "https://coledermott.dev/",
  },
  {
    id: 2,
    title: "StartUp Engine",
    desc: "A platform for launching StartUps developped by Ehsan Patel and myself. Organized meetings across the continent with key personnel.",
    url: "https://github.com/EhsanPatel/StartupEngine",
  },
  // {
  //   id: 3,
  //   title: "Roadaroo Website",
  //   desc: "An app like uber, but for package delivery with a B2B & B2C focus! Aided in many functions of the business including data and dev work.",
  //   url: "https://roadaroo.com/",
  // },
  // {
  //   id: 4,
  //   title: "Roadaroo Driver Apple App",
  //   desc: "The driver app for Roadaroo on the Apple store! Primarily aided in theory crafting, data analysis and architecting.",
  //   url: "https://apps.apple.com/ca/app/roadaroo-driver-make-money/id1617950169",
  // },
  // {
  //   id: 5,
  //   title: "Roadaroo Driver Android App",
  //   desc: "The driver app for Roadaroo on the Android store! Primarily aided in theory crafting, data analysis and architecting.",
  //   url: "https://play.google.com/store/apps/details?id=com.apptunix.roadarro.driver&hl=en&gl=US",
  // },
  // {
  //   id: 6,
  //   title: "Roadaroo User App",
  //   desc: "The user app for Roadaroo! Primarily aided in theory crafting, data analysis and architecting.",
  //   url: "https://github.com/EhsanPatel/roadaroo_user",
  // },
  {
    id: 3,
    title: "Run Multiple Teams",
    desc: "Basic script I created to run multiple teams windows at once for productivity",
    url: "https://github.com/cdermott7/RunMultipleTeams",
  },
  {
    id: 4,
    title: "Stock Trading AI",
    desc: "Stock Trading AI in development that in testing has beat market returns by 15%.",
    url: "https://github.com/cdermott7/StockTracking",
  },
  // {
  //   id: 9,
  //   title: "Roadaroo API",
  //   desc: "An API for running business orders automatically for the Roadaroo app! Primarily aided in theory crafting, data analysis and architecting.",
  //   url: "https://roadaroo.com/documentation",
  // },
  // {
  //   id: 10,
  //   title: "Roadaroo Server",
  //   desc: "Server for hosting Roadaroo apps. Primarily aided in theory crafting, and architecting.",
  //   url: "https://github.com/EhsanPatel/server",
  // },
  {
    id: 5,
    title: "Biquadris Game",
    desc: "Basic tetris like game.",
    url: "https://github.com/pghiasia/Biquadris-W24",
  },
  {
    id: 6,
    title: "Roadaroo Data Transfer Queries",
    desc: "Queries written to transfer data from old Firebase database to MongoDB database and standardize",
    url: "https://github.com/cdermott7/roadaroo-transfer",
  }
];

export default Projects;
