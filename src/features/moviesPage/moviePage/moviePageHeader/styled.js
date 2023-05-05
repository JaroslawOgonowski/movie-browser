import styled from "styled-components";

export const BackGround = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
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
  
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;

`;

export const Star = styled.img`
  width: 40px;
  margin-right: 6px;

`;

export const Rate = styled.span`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;

`;

export const Votes = styled.span`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1%;
  font-weight: 400;

`;