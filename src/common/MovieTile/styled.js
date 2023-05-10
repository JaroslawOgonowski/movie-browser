import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    transition: 0.5s;
    display: flex;
    
    &:hover{
        transform: scale(1.05);
    };
`;

export const TileWrapper = styled.section`
    width: 100%;
    min-height: 650px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-rows: auto 1fr;
    padding: 16px;
        
    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        grid-template-columns: auto 1fr;
        min-height: fit-content;
        width: 100%;
        padding: 0;
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
        padding: 16px;
    }
`;

export const Poster = styled.img`
    width: 100%;
    height: 100%;    
    border-radius: 5px;
    justify-self: center;
    
    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        display: grid;
        grid-template-columns: auto 1fr;
        margin: 16px;
        height: auto;
        width: 275px;
    };

    @media (max-width: 575px){
        width: 210px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
        height: 169px;
        width: 114px;
        margin-bottom: 0;
        margin: 0;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 16px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    display: block;
    }
    
    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
    margin: 0 0 0 16px;
    }
`;

export const Description = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
    grid-gap: 4px;
    margin-right: 16px;
  }
`;

export const MovieTitle = styled.h2`
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    color: ${({ theme }) => theme.color.woodsmoke};
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
    font-size: 16px;
    line-height: 1.3;
    margin: 0;
  }
`;

export const Release = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.waterloo};
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.3;
    margin: 0;
  }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    align-items: center;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0 16px 0 0;
  }
`;

export const ButtonTag = styled.button`
    padding: 8px 16px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.mystic};
    height: 20px;
    border: none;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        padding: 8px 12px;
        height: 8px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
        padding: 4px 8px;
        height: 5px;
    }
`;

export const Tag = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: ${({ theme }) => theme.color.woodsmoke};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
        font-size: 10px;
        line-height: 1.1;
    }
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        margin: 0;
    }
`;

export const Star = styled.img`
    width: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        width: 16px;
    }
`;

export const Rate = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke};
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;

export const Votes = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.waterloo};
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;
