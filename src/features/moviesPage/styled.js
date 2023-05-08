import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.section`
    width: calc(324px*4 + 3*24px);
    margin: 24px auto 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    justify-content: center;

    @media (max-width: ${({theme}) => theme.breakPoints.fullPage}px) {
        width: calc(324px*3 + 2*24px);
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1050px) {
        width: calc(324px*2 + 24px);
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        width: fit-content;
        grid-template-columns: 1fr;
        margin: 12px auto 0;
    }
`;

export const TileLink = styled(Link)`
      text-decoration: none;
`;