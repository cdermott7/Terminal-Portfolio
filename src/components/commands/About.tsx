import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Cole Dermott</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in
        Waterloo, Ontario.
      </p>
      <p>
        I am passionate about writing code and <br />
        developing web applications to solve real-life challenges. <br />
        But I also enjoy working with others and meeting new people! <br />
        I am good at collaborating, but also love self-learning! <br />
        I am very adaptable and pick up on things quickly! <br />
        I also love to exercise, ski, read, hike, and more!
      </p>
    </AboutWrapper>
  );
};

export default About;
