import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    height: 100%;
`;

export const StyledContainer = styled.section`
  flex-grow: 1;
  width: 100%;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));
  border-radius: 5px;
  transition: 0.5s;
  padding: 16px;

  &:hover{
    transform: scale(1.07);
  };

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    padding: 8px;
    min-height: 240px;
  };
`;

export const Photo = styled.img`
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 3/4; 
`;

export const Name = styled.h3`
  margin: 0 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin-top: 12px;

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 14px;
  };
`;

export const Role = styled.h4`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: ${({ theme }) => theme.color.waterloo};
  margin-bottom: 16px;

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 13px;
  };
`;

