import styled from "styled-components";
import { ReactComponent as NoResult } from "../images/noResult.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NoResultIcon = styled(NoResult)`
    @media (max-width: 767px) {
        height: 200px;
    }
`;