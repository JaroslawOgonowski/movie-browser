import styled from "styled-components";

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