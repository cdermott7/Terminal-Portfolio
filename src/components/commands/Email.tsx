import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open("mailto:" + "cdermott@uwaterloo.ca", "_self");
  }

  return (
    <Wrapper>
      <span>cdermott@uwaterloo.ca</span>
    </Wrapper>
  );
};

export default Email;
