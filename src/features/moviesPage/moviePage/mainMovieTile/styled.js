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
export const MovieDetails = styled.div`   
`;

export const Poster = styled.img`
    width: 312px;
    height: 464px;
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

export const MovieTitle = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 24px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 16px;
        margin: 0;
    };
`;

export const ReleaseYear = styled.p`
    font-weight: 400;
    font-size: 22px;
    line-height: 1.2;
    margin: 24px 0;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 16px;
        margin: 10px 0;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 13px;
        color: ${({ theme }) => theme.color.waterloo};
        margin: 4px 0;
    };
`;

export const PrimaryInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 0px 8px 0px;
    gap: 10px;
    align-items: center;
`;

export const Production = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGray};
    margin: 0px;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 14px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        display: none;
    };
`;

export const ProductionCountry = styled.p`
    font-weight: 400;
    font-size: 22px;
    line-height: 1.2;
    margin: 0px;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 18px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 12px;
    };
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
    margin: 0;
    align-items: center;
    gap: 8px;
    margin-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        margin-top: 16px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
    };
`;

export const ButtonTag = styled.button`
    padding: 8px 16px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.mystic};
    height: 20px;
    border: none;
    display: flex;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        padding: 8px 14px;
        height: 14px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        padding: 8px 12px;
        height: 8px;
    }

`;

export const Tag = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: ${({ theme }) => theme.color.woodsmoke};

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 12px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 10px;
        line-height: 1.1;
    }
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 24px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        margin-top: 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        margin-top: 12px;
    }
`;

export const Star = styled.img`
    width: 24px;
    display: flex;
    align-items: flex-start;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        width: 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        width: 16px;
    }
`;

export const Rate = styled.span`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    display: flex;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 18px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 13px;
    }
`;

export const Votes = styled.span`
    font-size: 14px;
    font-weight: 400;
    display: flex;
    margin-top: 5px;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        margin: 0;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 13px;
        margin: 0;
    }
`;

export const Overview = styled.p`
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
        margin-top: 18px;
    }
`;

export const MaxVotes = styled.span`
    font-size: 14px;
    font-weight: 400;
    display: flex;
    margin-top: 5px;

    @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        margin: 0;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 13px;
        margin: 0;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
        display: none;
    };
    

`;