import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import TechStack from "./commands/TechStack";
import Experience from "./commands/Experience";
import Extracurriculars from "./commands/Extracurriculars";
import Awards from "./commands/Awards";
import LinkedIn from "./commands/Linkedin";
import Languages from "./commands/Languages";
import CatImage from "./commands/CatImage";
import Chat from "./commands/Chat";
import ColeDermott from "./commands/ColeDermott";
import Ls from "./commands/Ls";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext, useState, useEffect } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  const [isChatting, setIsChatting] = useState(cmd === "chat");
  const [chatClosed, setChatClosed] = useState(cmd === "chat");

  const handleChatEnd = () => {
    setIsChatting(false);
    setChatClosed(true);
  };

  useEffect(() => {
    if (cmd === "chat" && !chatClosed) {
      setIsChatting(true);
    } else {
      setIsChatting(false);
    }
  }, [cmd, chatClosed]);

  useEffect(() => {
    if (cmd === "chat") {
      setChatClosed(false);
    }
  }, [cmd]);

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          email: <Email />,
          gui: <Gui />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          pwd: <GeneralOutput>/home/coledermott</GeneralOutput>,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          techstack: <TechStack />,
          whoami: <GeneralOutput>visitor</GeneralOutput>,
          experience: <Experience></Experience>,
          extracurricular: <Extracurriculars></Extracurriculars>,
          awards: <Awards></Awards>,
          languages: <Languages></Languages>,
          linkedin: <LinkedIn></LinkedIn>,
          cat: <CatImage></CatImage>,
          chat: isChatting ? <Chat onChatEnd={handleChatEnd} /> : null,
          cd: <ColeDermott></ColeDermott>,
          ls: <Ls></Ls>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
