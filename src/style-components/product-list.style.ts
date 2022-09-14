import styled, { css } from "styled-components";

type Props = {
  hasProduct:boolean
}

export const StyledContainer = styled.div<Props>`
  ${({ theme ,hasProduct}) => css`
    display: grid;
    background-color:  ${hasProduct ? theme.white: theme.silver};
    padding:${theme.spaceS};
    justify-content:center;
    @media (min-width: ${theme.size.tablet}) {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;
      padding:${theme.spaceS};
    }
    @media (min-width: ${theme.size.desktop}) {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: auto;
      padding:${theme.spaceS};

    }
  `};
`;