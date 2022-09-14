import styled, { css } from "styled-components";

export const StyleWrapper = styled.h1`
  ${({ theme }) => css`
    display: grid;
    text-align: center;
`};
`;

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    text-align: center;
    height:100%;
`};
`;
export const StyledNoProducts = styled.div`
  ${({ theme }) => css``};
`;

export const StyledButton = styled.p`
  ${({ theme }) => css`
    color:white;
    padding:6px;
    border-radius:4px;
    background-color: ${theme.purple};
    margin:10px 20px 10px;
    float:left;
    font-size:${theme.fontSizeMedium};
    width:180px;
    font-weight:200;
`};
`;