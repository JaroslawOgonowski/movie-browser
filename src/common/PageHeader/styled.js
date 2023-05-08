import styled, { css } from "styled-components";

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 1.2;
    color: #18181B;
    margin: 56px 0 26px;
    font-family: 'Poppins';

   

    @media (max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 30px;
        margin: 40px 0 18px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 18px;
        margin: 24px 0 12px;

        &&{
            ${({ moviePageSection }) => moviePageSection && css`{
                font-size: 20px;
            }`};
        };
    };
`;