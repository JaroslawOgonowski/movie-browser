import styled from "styled-components";

export const PopularPeoplePage = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1368px;

  @media(max-width: ${({ theme }) => theme.breakPoints.fullPage}px) {
  margin: 0 16px;
  };
`;

export const Box = styled.div`
display: flex;
`;

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 1390px){
    width: calc(208px*5 + 4*24px);
  };
  @media (max-width: 1167px){
    width: calc(208px*4 + 3*24px);
  };
  @media (max-width: 936px){
    width: calc(208px*3 + 2*24px);
  };
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    width: calc(136px*4 + 3*16px);
    gap: 16px;
  };
  @media (max-width: 623px){
    width: calc(136px*3 + 2*16px);
  };
  @media (max-width: 471px){
    width: calc(136px*2 + 16px);
  };
  @media (max-width: 319px){
    justify-content: center;
  };
`;

export const ListItem = styled.li`
`;