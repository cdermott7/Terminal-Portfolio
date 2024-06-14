import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Languages: React.FC = () => {
  return (
    <Wrapper data-testid="awards">
      <EduIntro>Here are my spoken languages!</EduIntro>
      {eduBg.map(({ title, desc}) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "English",
    desc: "5/5 - Fluent | Native Language",
  },
  {
    title: "French - France",
    desc: "3/5 - Working Proficiency | Second Language",
  },
  {
    title: "French - Quebec",
    desc: "3/5 - Working Proficiency | Second Language",
  },
  {
    title: "German",
    desc: "1/5 | Basic Knowledge",
  },
  {
    title: "Japanese",
    desc: "1/5 | Basic Knowledge",
  },
];

export default Languages;
