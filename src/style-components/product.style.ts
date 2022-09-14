import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    height:auto;
    width:auto;
    margin: ${theme.spaceS};
    background-color:white;
    padding-bottom:30px;
 `};
`;

export const StyledInput = styled.input`
  ${({ theme }) => css`
    float: left;
    position: absolute;
    z-index: 1;
    margin:${theme.spaceS};
    accent-color: ${theme.purple};
  `};
`;

export const StyledImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
 `};
`;

export const StylePriceWrapper = styled.div`
  ${({ theme }) => css`
    display:flex;
    justify-content:flex-start;
    gap:${theme.spaceS};
 `};
`;

export const StyledPromotionBadge = styled.div`
  ${({ theme }) => css`
    font-size:${theme.fontSizeMedium};
    background-color: ${theme.red};
    margin-top:-27px;
    opacity: 0.5;
    color:${theme.white};
  `};
`;

export const StyledName = styled.div`
  ${({ theme }) => css`
    font-size:${theme.fontSizeMedium};
    display:flex;
    width:100%;
    text-align:left;
  `};
`;

export const StyledPrice = styled.div`
  ${({ theme }) => css`
     font-size:${theme.fontSizeMedium};
     padding-top:${theme.spaceS};
  `};
`;

export const StyledPriceWas = styled.div`
  ${({ theme }) => css`
    color: ${theme.red};
    text-decoration: line-through;
    font-size:${theme.fontSizeMedium};
    padding-top:${theme.spaceS};
  `};
`;

export const StyledOutOfStock = styled.div`
  ${({ theme }) => css`
     color: ${theme.red};
     font-size:${theme.fontSizeMedium};
     float:left;
     padding-top:${theme.spaceS};
  `};
`;

export const StyledQuantity = styled.div`
  ${({ theme }) => css`
     font-size:${theme.fontSizeMedium};
     display:flex;
     width:100%;
     padding-top:${theme.spaceS};
     color:${theme.green};
  `};
`;

export const StyledLowOnStock = styled.div`
  ${({ theme }) => css`
     color: ${theme.orange};
     font-size:${theme.fontSizeMedium};
     float:left;
     padding-top:${theme.spaceS};
  `};
`;

export const StyledContentWrapper = styled.div`
  ${({ theme }) => css`
     padding:25px;
  `};
`;


