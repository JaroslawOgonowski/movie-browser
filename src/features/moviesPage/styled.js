import styled from "styled-components";

export const Layout = styled.div`
    margin: 24px auto 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    justify-content: center;

    @media (max-width: ${({theme}) => theme.breakPoints.fullPage}px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1050px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        grid-template-columns: 1fr;
        margin: 12px auto 0;
    }
`;