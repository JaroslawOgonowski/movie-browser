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

export const Poster = styled.img`
    width: 312px;
    height: 464px;
    border-radius: 5px;
    grid-row: span 2;
`;

export const PersonName = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 8px;
`;

export const PersonDetails = styled.div`
`;

export const PrimaryInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 0px 8px 0px;
    gap: 10px;
    align-items: center;
`;

export const Birth = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGray};
    margin: 0px;
`;

export const BirthDetails = styled.p`
    font-weight: 400;
    font-size: 22px;
    line-height: 1.2;
    margin: 0px;
`;

export const Biography = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.6;
    margin-top: 24px;
`;