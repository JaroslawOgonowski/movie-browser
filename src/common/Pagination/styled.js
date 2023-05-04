import styled from "styled-components";

export const StyledPagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0 103px;
    gap: 24px;

    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        gap: 8px;
        margin: 32px 0 31px;
    };
`;

export const StyledButtons = styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        gap: 8px;
    };
`;

export const Button = styled.button`
    display: flex;
    padding: 8px 16px;
    gap: 8px;
    font-size: 14px;
    font-weight: 400;
    align-items: center;
    border-radius: 5px;
    color: ${({theme}) => theme.color.woodsmoke};
    background: ${({theme}) => theme.color.pattensBlue};
    cursor: pointer;
    border: none;
    transition: 0.5s;

    &:hover{
    filter: brightness(0.8);
    };

    &:disabled {
        background: ${({theme}) => theme.color.mystic};
        cursor: not-allowed;
    };
    
    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        gap: 4px;
    };
`;

export const StyledPages = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.color.waterloo};
    font-size: 16px;
    font-weight: 400;
    gap: 8px;

    @media (max-width: ${({theme}) => theme.breakPoints.mobileMax}px) {
        font-size: 10px;
    };
`;

export const PageNumber = styled.span`
    font-weight: 600;
    color: ${({theme}) => theme.color.woodsmoke};
`;

export const ButtonText = styled.div`
    @media (max-width: ${({theme}) => theme.breakPoints.notebook}px) {
        display: none;
    }; 
`;

export const Wrapper = styled.div`
    display: none;

    @media (max-width: ${({theme}) => theme.breakPoints.notebook}px) {
        display: flex;
    }; 
`;