import styled from "styled-components";
import { ReactComponent as NoResult } from "../images/noResult.svg";

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NoResultIcon = styled(NoResult)`
    @media (max-width: ${({theme}) => theme.breakPoints.notebook}px) {
        height: 320px;
    }

    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        height: 200px;
    }
`;