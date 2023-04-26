import styled from "styled-components";

export const TileWrapper = styled.div`
    background-color: ${({theme}) => theme.color.white};
    border-radius: 5px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    padding: 16px 16px 0;
    display: grid;
    grid-template-rows: auto 1fr;
`;

export const Poster = styled.img`
    height: 434px;
    width: 292px;
    border-radius: 5px;
    margin-bottom: 16px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Description = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 0;
`;

export const MovieTitle = styled.h2`
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    color: ${({theme}) => theme.color.woodsmoke};
    margin: 0;

`;

export const Release = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: ${({theme}) => theme.color.waterloo};
    margin: 0;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    align-items: center;
    gap: 8px;
`;

export const ButtonTag = styled.button`
    padding: 8px 16px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.color.mystic};
    height: 20px;
    border: none;
    display: flex;
    align-items: center;
`;

export const Tag = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: ${({theme}) => theme.color.woodsmoke};
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 23px;
`;

export const Star = styled.img`
    width: 24px;
`;

export const Rate = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${({theme}) => theme.color.woodsmoke};
    line-height: 1.5;
`;

export const Votes = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.color.waterloo};
    line-height: 1.5;
`;
