import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/TechStack.styled";

const TechStack: React.FC = () => {
  return (
    <AboutWrapper data-testid="textstack">
      <p>
        <HighlightSpan>Tech Stack:</HighlightSpan>
      </p>
      <p>
        <HighlightAlt>Frontend:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://dart.dev/">Dart</a>,<span>&#160;</span>
        <a href="https://flutter.dev/">Flutter</a>,<span>&#160;</span>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>,
        <span>&#160;</span>
        <a href="https://reactjs.org/">React</a>,<span>&#160;</span>
        <a href="https://www.typescriptlang.org/">TypeScript</a>.
        <br />
        <br />
        <HighlightAlt>Backend:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://www.mysql.com/">SQL</a>,<span>&#160;</span>
        <a href="https://www.mongodb.com/">MongoDB</a>,<span>&#160;</span>
        <a href="https://www.oracle.com/java/">Java</a>,<span>&#160;</span>
        <a href="https://www.python.org/">Python</a>,<span>&#160;</span>
        <a href="https://isocpp.org/">C++</a>,<span>&#160;</span>
        <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">C#</a>,
        <span>&#160;</span>
        <a href="https://en.wikipedia.org/wiki/C99">C99</a>,<span>&#160;</span>
        <a href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a>,
        <span>&#160;</span>
        <a href="https://firebase.google.com/docs/database">Firebase</a>.
        <br />
        <br />
        <HighlightAlt>Mobile Development:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://dart.dev/">Dart</a>,<span>&#160;</span>
        <a href="https://flutter.dev/">Flutter</a>,<span>&#160;</span>
        <a href="https://reactnative.dev/">React Native</a>,<span>&#160;</span>
        <a href="https://developer.apple.com/xcode/swiftui/">Swift</a>,
        <span>&#160;</span>
        <a href="https://kotlinlang.org/">Kotlin</a>.
        <br />
        <br />
        <HighlightAlt>Styling:</HighlightAlt>
        <a href="https://styled-components.com/">CSS</a>.
        <br />
        <br />
        <HighlightAlt>Data Analysis & Machine Learning:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://pandas.pydata.org/docs/index.html">Pandas</a>,
        <span>&#160;</span>
        <a href="https://scikit-learn.org/">Scikit-Learn</a>,<span>&#160;</span>
        <a href="https://www.tensorflow.org/">TensorFlow</a>,<span>&#160;</span>
        <a href="https://xgboost.readthedocs.io/en/stable/">XGBoost</a>,
        <span>&#160;</span>
        <a href="https://pytorch.org/">PyTorch</a>.
        <br />
        <br />
        <HighlightAlt>Cloud & DevOps:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://azure.microsoft.com/">Microsoft Azure</a>,
        <span>&#160;</span>
        <a href="https://git-scm.com/">Git</a>,<span>&#160;</span>
        <a href="https://flow.microsoft.com/">Power Automate</a>.
        <br />
        <br />
        <HighlightAlt>APIs and Integration:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://www.postman.com/">Postman</a>,<span>&#160;</span>
        <a href="https://learn.objectiflune.com/planetpress-connect/">
          PlanetPress Connect
        </a>
        ,<span>&#160;</span>
        <a href="https://docs.stripe.com/api">Stripe</a>,<span>&#160;</span>
        <a href="https://developers.google.com/maps">Google Maps</a>,
        <span>&#160;</span>
        <a href="https://developers.google.com/waze">Waze</a>,
        <span>&#160;</span>
        <a href="https://developer.apple.com/maps/">Apple Maps</a>.
        <br />
        <br />
        <HighlightAlt>Project Management:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://www.atlassian.com/software/jira">Jira</a>,
        <span>&#160;</span>
        <a href="https://trello.com/">Trello</a>.
        <br />
        <br />
        <HighlightAlt>Version Control & Collaboration:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://github.com/">GitHub</a>,<span>&#160;</span>
        <a href="https://about.gitlab.com/">GitLab</a>,<span>&#160;</span>
        <a href="https://bitbucket.org/product">BitBucket</a>.
        <br />
        <br />
        <HighlightAlt>Testing:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://vitest.dev/">Vitest</a>,<span>&#160;</span>
        <a href="https://testing-library.com/">React Testing Library</a>.
        <br />
        <br />
        <HighlightAlt>Deployment:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://pages.github.com/">GitHub Pages</a>,<span>&#160;</span>
        <a href="https://cloud.google.com/appengine">Google App Engine</a>,
        <span>&#160;</span>
        <a href="https://developer.apple.com/help/app-store-connect/">
          App Store Connect
        </a>
        ,<span>&#160;</span>
        <a href="https://firebase.google.com/docs/hosting">Firebase Hosting</a>.
        <br />
        <br />
        <HighlightAlt>Additional Tools & Languages:</HighlightAlt>
        <span>&#160;</span>
        <a href="https://docs.microsoft.com/en-us/office/vba/api/overview/excel">
          VBA
        </a>
        ,<span>&#160;</span>
        <a href="https://www.json.org/json-en.html">JSON</a>,<span>&#160;</span>
        <a href="https://dotnet.microsoft.com/">.NET</a>,<span>&#160;</span>
        <a href="https://nodejs.org/">Node.js</a>.
        <br />
      </p>
    </AboutWrapper>
  );
};

export default TechStack;
