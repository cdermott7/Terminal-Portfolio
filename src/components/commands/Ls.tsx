import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const Ls: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        <HighlightSpan>Cole Dermott Contact Information:</HighlightSpan>
      </p>
      <p>
        <HighlightAlt>Phone #: (+1)905-805-2755</HighlightAlt>
      </p>
      <p>
        <HighlightAlt>Personal Email: dermottcole@gmail.com</HighlightAlt>
      </p>
      <p>
        <HighlightAlt>UWaterloo Email: cdermott@uwaterloo.ca</HighlightAlt>
      </p>
      <p>
        <HighlightAlt>Wilfrid Lauier Email: derm8350@mylaurier.ca</HighlightAlt>
      </p>
    </AboutWrapper>
  );
};

export default Ls;
