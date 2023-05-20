import styled from "styled-components";
import { ReactComponent as Error } from "../images/error.svg";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    margin-top: 180px;
    text-align: center;

    @media (max-width: ${({theme}) => theme.breakPoints.fullPage}px) {
        margin-top: 120px;
    }

    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        margin-top: 60px;
    }
`;

export const ErrorIcon = styled(Error)`
    width: 100px;
    height: 90px;
    margin: 0 0 38px;

    @media (max-width: ${({theme}) => theme.breakPoints.fullPage}px) {
        width: 80px;
        height: 80px;
        margin: 0 0 24px;
    }

    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        width: 60px;
        height: 60px;
        margin: 0 0 16px;
    }
`;

export const ErrorText = styled.h2`
    margin: 0;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.2;

    @media (max-width: ${({theme}) => theme.breakPoints.fullPage}px) {
        font-size: 30px;
    }

    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        font-size: 24px;
    }
`;

export const Information = styled.p`
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    margin: 24px 0;

    @media (max-width: ${({theme}) => theme.breakPoints.fullPage}px) {
        font-size: 20px;
    }

    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        font-size: 16px;
    }
`;

export const ButtonLink = styled(Link)`
    padding: 16px 24px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    color: #FFFFFF;
    background: #0044CC;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Open Sans' sans-serif;

    &:hover{
        filter: brightness(1.2);
    };

    @media (max-width: ${({theme}) => theme.breakPoints.fullPage}px) {
        font-size: 12px;
        padding: 12px 18px;
    }

    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        font-size: 12px;
        padding: 8px 12px;
    }
`;