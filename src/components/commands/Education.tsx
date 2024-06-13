import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
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
    title: "BCS - Bachelor's of Computer Science",
    desc: "University of Waterloo | 2021 ~ 2026",
  },
  {
    title: "BBA - Bachelor's of Business Administration",
    desc: "Wilfrid Laurier University | 2021 - 2026",
  },
  {
    title: "High School Diploma",
    desc: "Hillfield Strathallan College | 2017 - 2020",
  },
];

export default Education;
