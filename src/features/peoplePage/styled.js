import styled from "styled-components";

export const PopularPeoplePage = styled.main`
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
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 1200px){
    grid-template-columns: repeat(5, 1fr);;
  };
  @media (max-width: 1020px){
    grid-template-columns: repeat(4, 1fr);
  };
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
    grid-template-columns: 1fr 1fr;
  };

`;

export const ListItem = styled.li`
`;