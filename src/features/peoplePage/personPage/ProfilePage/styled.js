import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 64px 0;
    padding: 40px;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 0 40px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    grid-template-columns: minmax(auto, 312px) 1fr;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        grid-template-columns: minmax(auto, 210px) 1fr;
        gap: 0 28px;
        padding: 30px;
        margin: 16px 0;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        grid-template-columns: minmax(auto, 105px) 1fr;
        gap: 0 16px;
        padding: 16px;
    };
`;

export const Poster = styled.img`
    width: 400px;
    height: 564px;
    border-radius: 5px;
    grid-row: span 2;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        width: 212px;
        height: 325px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        width: 114px;
        height: 169px;
    };
`;

export const PersonName = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 24px;
        margin-bottom: 16px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 16px;
    };
`;

export const PersonDetails = styled.div`
`;

export const PrimaryInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 0px 8px 0px;
    gap: 10px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        gap: 4px;
    };
`;

export const Birth = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGray};
    margin: 0px;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 14px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 12px;
    };
`;

export const BirthDetails = styled.p`
    font-weight: 400;
    font-size: 22px;
    line-height: 1.2;
    margin: 0px;
    color: ${({theme}) => theme.color.black};

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 18px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 12px;
    };
`;

export const Biography = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.6;
    margin-top: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 16px;
        margin-top: 18px;
        grid-row: 3;
        grid-column: span 2;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 14px;
        margin-top: 16px;
    }
`;