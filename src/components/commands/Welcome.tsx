import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
  ____  _   _      ____                             _   _   
 / __ / _  | | ___|  _  | ___  ___ _ __ __ _   ___ | |_| |_ 
| |  | | | | |/ _ | | | |/ _ || __| '_ V _' | / _  | __| __|
| |__| |_| | |  __/ |_| |  __/||  | | | | | || (_) | |_| |_ 
|____|____/|_|____|____/ ____|||  |_| |_| |_| ____/ ___|___|

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
   ____      _      
  / ___| _ _| | ___
 | |  | | | | |/ _ | 
 | |__| |_| | |  __/ 
 |____|___,_|_|____|
   ____                             _   _   
  |  _  | ___  ___ _ __ __ _   ___ | |_| |_ 
  | | | |/ _ || __| '_ V _' | / _  | __| __|    
  | |_| |  __/||  | | | | | || (_) | |_| |_ 
  |____/|____|||  |_| |_| |_||____/|___|___|
     `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/cdermott7/Terminal-Portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
