import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 56px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 20px;
  };
`;

export const Layout = styled.div`
    margin: 24px auto 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    justify-content: center;

    @media (max-width: ${({theme}) => theme.breakPoints.fullPage}px) {
        width: calc(292px*3 + 2*24px);
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1050px) {
        width: calc(292px*2 + 24px);
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        width: fit-content;
        grid-template-columns: 1fr;
        margin: 12px auto 0;
    }
`;