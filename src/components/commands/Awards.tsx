import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Awards: React.FC = () => {
  return (
    <Wrapper data-testid="awards">
      <EduIntro>Here are my award recognitions!</EduIntro>
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
    title: "Honors",
    desc: "University of Waterloo | Dec 2021",
  },
  {
    title: "Honors",
    desc: "Wilfrid Laurier University | Dec 2021",
  },
  {
    title: "Best Delegate",
    desc: "RyeMUN 2021 | Nov 2021",
  },
  {
    title: "CASE LCT Semi-Finalist",
    desc: "Wilfrid Laurier University | Nov 2021",
  },
  {
    title: "AP National Scholar",
    desc: "AP College Board | June 2021",
  },
  {
    title: "High School Diploma with Honors",
    desc: "Hillfield Strathallan College | June 2021",
  },
  {
    title: "Plenary Speaker",
    desc: "NHSMUN 2021 | Mar 2021",
  },
  {
    title: "UfT ROTMAN High School Case Competition Top 3",
    desc: "University of Toronto Rotman | Feb 2021",
  },
  {
    title: "Regional Award 2020",
    desc: "DECA | Jan 2021",
  },
  {
    title: "Oustanding Delegate",
    desc: "McGill SSUNS Model UN Conference 2020 | Nov 2020",
  },
  {
    title: "Regional Exam Award",
    desc: "DECA | Jan 2020",
  },
  {
    title: "Book Award",
    desc: "McGill SSUNS Model UN Conference 2019 | Nov 2019",
  },
  {
    title: "Best Delegate",
    desc: "Appleby College | May 2019",
  },
];

export default Awards;
