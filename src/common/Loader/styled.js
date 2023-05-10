import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    
    @media (max-width: 767px) {
        margin-top: 24px;
    }
`;

export const Spinner = styled.div`
    width: 90px;
    height: 90px;
    border: 11px solid #DDDDEE;
    border-radius: 50%;
    border-right-color: #000000;
    animation: spin 1.5s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 767px) {
            width: 35px;
            height: 35px;
            border-width: 4px;
    }
`;