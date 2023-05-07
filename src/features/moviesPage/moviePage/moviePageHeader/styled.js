import styled from "styled-components";

export const BackGround = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    width: 100%;
    padding: 0 16px 0 16px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        padding: 0 0 0 16px;
      };
`;

export const Backdrop = styled.img`
    display: block;
    width: 100%;
`;

export const BackDropWrapper = styled.div`
    max-width: 1368px;
    position: relative;
    margin: auto;
`;

export const Information = styled.div`
    background: ${({ theme }) => theme.color.lineargradient};
    background-position: center;
    background-size: 140%;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: bottom;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
  margin-bottom: 24px;
  color: inherit;

  @media (max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 40px;
        margin-bottom: 16px;
    };
  
  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 24px;
        margin-bottom: 4px;
    };
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        margin-bottom: 12px;
    };
  
  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        margin-bottom: 8px;
        flex-direction: row;
        align-items: end;
    };
`;

export const Star = styled.img`
  width: 40px;
  margin-right: 6px;

  @media (max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
       width: 28px;
      };

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        width: 16px;
        margin-right: 4px;
    };
`;

export const Rate = styled.span`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 24px;
        margin-bottom: 8px;
    };

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 14px;
        margin-right: 8px;
        margin-bottom: 0;
    };
`;

export const Votes = styled.span`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
        font-size: 12px;
    };

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 10px;
        margin: 0;
    };
`;