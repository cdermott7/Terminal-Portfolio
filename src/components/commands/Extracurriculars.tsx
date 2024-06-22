import { ExperiIntro, ExperiList } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

const Extracurriculars: React.FC = () => {
  return (
    <Wrapper data-testid="extracurriculars">
      <ExperiIntro>Here is my extracurricular involvement!</ExperiIntro>
      {experiBg.map(({ title, desc, role }) => (
        <ExperiList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <div className="role">{role}</div>
        </ExperiList>
      ))}
    </Wrapper>
  );
};

const experiBg = [
  {
    title: "Model UN Co-President/Head Delegate",
    desc: "Wilfrid Laurier University | Sep 2022 - Present",
    role: "Trained new delegates in Model UN giving them direction, feedback, and actionable goals to improve and further their skills. Created slideshows and exemplars for said training. Created efficient training plan to give new delegates as through an understanding as possible. Created budgets to plan out conferences for the year. Organized conferences and handled admin related tasks like emailing other schools. Organized and help ran club interviews and meetings.",
  },
  {
    title: "Senate",
    desc: "Wilfrid Laurier University | Jun 2022 - May 2023",
    role: "One of 6 Undergrad Elected Senate Members. On Senate Committee for Teaching and Learning and Senate Finance Committee. Meet with school officials and other Senate members to inform Laurier policy decisions",
  },
  {
    title: "Board of Directors",
    desc: "Wilfrid Laurier University | May 2022 - May 2023",
    role: "One of 12 Undergrad elected Board of Directors Members. Meet frequently in various committees and sub-committees to decide actions that Laurier's Student Union should take.",
  },
  {
    title: "General Member",
    desc: "Wilfrid Laurier Foot Patrol | Dec 2021 - May 2022",
    role: "Ensure people get from their current location to their desired destination safely.",
  },
  {
    title: "Administrative Executive Coordinator",
    desc: "Mock Trial Laurier | May 2022 - Sep 2022",
    role: "Coordinated several events with the VP of events for the Mock Trial Laurier club. Broke down events and to-do tasks into smaller, more manageable tasks. Organized team socials and events for club morale.",
  },
  {
    title: "Member of 2020 Model Parliament Liberal Party",
    desc: "Ontario Youth Parliament | Feb 2020",
    role: "Along with 150 politically inspired youth learned and participated in the happenings of Ontario's politics. Participated in mock proceedings of parliament in order to gain a greater understanding of procedures at play.",
  },
  {
    title: "Model UN Head Delegate",
    desc: "Hillfield Strathallan College | Sep 2020 - Jun 2021",
    role: "Helped organize and lead events in order to train new members of the Model UN club. Met with and broke down tasks for new delegates in order to smooth their transition to joining the club.",
  },
  {
    title: "Cedar House Captain",
    desc: "Hillfield Strathallan College | Sep 2019 - Jun 2020",
    role: "Organized communal events for school. Led house community of 400 people in events.",
  },
];

export default Extracurriculars;
