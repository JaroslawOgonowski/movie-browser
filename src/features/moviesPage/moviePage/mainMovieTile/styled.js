import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 64px 0;
    padding: 40px;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 0 40px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    grid-template-columns: minmax(auto, 312px) 1fr;

`;
export const MovieDetails = styled.div`

`;
export const Poster = styled.img`
    width: 312px;
    height: 464px;
    border-radius: 5px;
    grid-row: span 2;
`;

export const MovieTitle = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 8px;
`;

export const ReleaseYear = styled.p`
    font-weight: 400;
    font-size: 22px;
    line-height: 1.2;
    margin: 24px 0;
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
`;

export const ProductionCountry = styled.p`
    font-weight: 400;
    font-size: 22px;
    line-height: 1.2;
    margin: 0px;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
    margin: 0;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
`;

export const ButtonTag = styled.button`
    padding: 8px 16px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.mystic};
    height: 20px;
    border: none;
    display: flex;
    align-items: center;
`;

export const Tag = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: ${({ theme }) => theme.color.woodsmoke};
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 24px;
    align-items: center;
`;

export const Star = styled.img`
    width: 24px;
    display: flex;
    align-items: flex-start;
`;

export const Rate = styled.span`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    display: flex;
`;

export const Votes = styled.span`
    font-size: 14px;
    font-weight: 400;
    display: flex;
    margin-top: 5px;
`;

export const Overview = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.6;
    margin-top: 24px;
`;