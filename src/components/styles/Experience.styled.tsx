import styled from "styled-components";

export const ExperiIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const ExperiList = styled.div`
  margin-bottom: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
  }

  .desc {
    color: ${({ theme }) => theme.colors?.text[200]};
  }

  .role {
    color: ${({ theme }) => theme.colors?.text[200]};
  }

  .skills {
    color: ${({ theme }) => theme.colors?.text[200]};
  }
}
`;
