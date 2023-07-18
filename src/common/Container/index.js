import styled from "styled-components";

export const Container = styled.main`
    margin: 0 auto;
    max-width: 1368px;
    padding-bottom: 50px;
    
    @media (max-width: ${({ theme }) => theme.breakPoints.fullPage}px) {
        margin: 0 16px;
    };
`;