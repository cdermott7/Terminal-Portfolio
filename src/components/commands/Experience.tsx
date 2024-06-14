import { ExperiIntro, ExperiList } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <ExperiIntro>Here is my professional background!</ExperiIntro>
      {experiBg.map(({ title, desc, role, skills}) => (
        <ExperiList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <div className="role">{role}</div>
          <div className="skills">{skills}</div>
        </ExperiList>
      ))}
    </Wrapper>
  );
};

const experiBg = [
  {
    title: "Software Engineer",
    desc: "Roadaroo | Feb 2023 - Present",
    role: "Junior developer on a team of 2. Startup in the process of launching. Exposure and work in many functions including finance and accounting as well as dev work. Aided in full-stack development and architecture design. Analyzed large scales of data to search for trends and target specific sectors. Helped in creating UI design to maximize user experience and minimize user clicks. Helped in creating app to function on both IOS and Android. Organized and participated in weekly progress calls to communicate to higher ups regarding app progress",
    skills: "Application Programming Interfaces (API) · Java · Dart · Testing · Communication · Analytical Skills · Microsoft Azure · Cascading Style Sheets (CSS) · JSON · C# · Teamwork · JavaScript · Python (Programming Language) · Program Development · Flutter · SQL · Mobile Applications · Web Development · C++ · HTML · Team Leadership · Data Analysis · Web Applications · Azure SQL · MongoDB",
  },
  {
    title: "Software Engineer",
    desc: "PointClickCare | Sep 2023 - Dec 2023",
    role: "Member of MDS Team who built assessments according to government rules and regulations to assess patients. Worked with software engineering and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance. Designed Machine Learning algorithm to analyze patient trends within hackathon. Integrated third-party tools and components into applications. Tested methodology with writing and execution of test plans, debugging and testing scripts and tools including unit tests and manual testing.",
    skills: "Core Java · Pandas (Software) · SQL · Scikit-Learn · XGBoost · TensorFlow · PyTorch · Python · Jira · BitBucket"
  },
  {
    title: "Software Developer",
    desc: "Directworx | Jan 2023 - Jun 2023",
    role: "Worked in dynamic 365 and azure architecture to build solutions from base level to finished product. Designed automation flows for internal and external processes in various programs (Power Automate and Planet Press) that improved efficiency. Onboarded new clients onto directworx platform from setup to launch. Wrote code for applications in a variety of languages (C#, Python, Java, VBA, XML, SQL). Developed research and helped solve issues much more swiftly when they arise. Developed financial reporting and tracking software to reconcile account balances. Designed UIs to simplify and enhance user experience. Modulated code and documented according to Google Styling Standards. Created validations to ensure programs functioned as intended. Continued part-time following my co-op due to the aide I provided to the business",
    skills: "Microsoft SQL Server · Planet Press · Automation · C# · Microsoft Power Automate · VBA · Bash · Trello · GitKraken · .NET"
  },
  {
    title: "Software Engineer",
    desc: "Brock Solutions | May 2022 - Sep 2022",
    role: "Member of shift bidding team which engineered a multi-platform application using C# and .NET Framework that improved operational efficiency by 30%, being adopted by over 500 Air Canada employees within the first six months post-launch. Refactored and modularized legacy codebases, elevating functionality and slashing redundant code by 12%. Utilized SQL queries and Java-based database techniques, leading to a 30% improvement in data retrieval times.",
    skills: "Self Learning · Computer Science · Logical thinking and analysis · Microsoft SQL Server · Software Development · Cascading Style Sheets (CSS) · C# · Teamwork · Microsoft Office · JavaScript · Functional Specifications · Time Management · Leadership · C++ · HTML"
  },
  {
    title: "Co-Founder",
    desc: "StartUp Engine | Jan 2022 - Present",
    role: "Marketed product to incubators across North America obtaining many key partnerships. Developped business plan and documentation. Aided in programming app infrastructure.",
    skills: "Marketing · Cascading Style Sheets (CSS) · Python (Programming Language) · Flask · Administration"
  },
  {
    title: "Bartender",
    desc: "Oliver & Bonacini Cafe Grill | Jul 2021 - Aug 2021",
    role: "Organized bar inventory and storage procedures to keep stock within optimal levels and meet expected customer depends. Interacted with and pleased customers to ensure a consistent positive experience. Handled simultaneous customer, team and business needs while avoiding unnecessary delays or errors. Received positive" + <a href="https://drive.google.com/drive/u/0/home">"review"</a> + " for my service.",
    skills: "Public Speaking · Teamwork · Outgoing · Time Management · Leadership",
  },
  {
    title: "Ski Instructor",
    desc: "Blue Mountain Resort - Dec 2018 - Jan 2021",
    role: "Taught young children and adults the basics of skiing. Efficiently led and communicated with groups of 2-20 people.",
    skills: "Public Speaking · Teamwork · Outgoing · Time Management · Leadership",
  },
  {
    title: "Dining Room Busser",
    desc: "Sunset Grill Restaurants Ltd. | Jul 2017 - Sep 2019",
    role: "Efficiently prepared tables for clients in a swift manner. Aided companions in providing excellent service for patrons. Organized utensils and plates in a quick and effective fashion.",
    skills: "Teamwork · Outgoing · Time Management",
  },
];

export default Experience;
