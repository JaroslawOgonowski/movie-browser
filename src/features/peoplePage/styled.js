import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopularPeoplePage = styled.div`
  margin: 0 16px;
  max-width: 1368px;
`;

export const Title = styled.h2`
  margin-top: 56px;
  margin-bottom: 24px;
  align-self: flex-start;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 20px;
  };
`;
export const ListBox = styled.div`
display: flex;
justify-content: center;
width: fit-content;
margin: 0 auto;
justify-items: center;
`;

export const List = styled.ul`
  max-width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    gap: 16px;
  };

`;

export const ListItem = styled.li`
`;
