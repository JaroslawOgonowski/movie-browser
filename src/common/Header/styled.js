import styled from "styled-components";
import { ReactComponent as Icon } from "../images/Video.svg"
import { NavLink } from "react-router-dom";

export const StyledIcon = styled(Icon)`
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    width: 17px;
  };
`;

export const StyledHeader = styled.header`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.color.mainWhite};
  background-color: ${({ theme }) => theme.color.mainBlack};
  display: flex;
  justify-content: center;
   
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    justify-content: space-evenly;
  };
`;

export const HeaderBox = styled.div`
  width: 1368px;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakPoints.fullPage}px) {
    margin-left: 16px;
  };

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin-left: 0;
  };

  
@media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    height: 142px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  };
`;

export const Container = styled.div`  
  display: flex;
  align-items: center;
  gap: 80px;
  
  @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
    gap: 40px;
  };

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    justify-content:space-between;
  };
`;

export const HomePageLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

export const TitleBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12px; 
     
  &:hover{
      @media(min-width: ${({ theme }) => theme.breakPoints.mobileMax}px){
    transition: 2s;
    background-image: linear-gradient(45deg, violet, red, orange, yellow, green, blue, indigo);
    -webkit-background-clip: text;
    color: transparent;
   };
  };
   
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    gap: 8px;
    margin-left:16px;
  };
`;

export const IconBox = styled.div`
@media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    width: 17px;
  };
`;

export const PageTitle = styled.h1`
  width: max-content;
  margin: 0;
  font-weight: 500;
  font-size: 24px;

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
  font-size: 13px;
  };
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 16px;

   
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin-right:32px;
  };
`;

export const ListItem = styled.li`
  text-decoration: none;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 13.5px 24px;
  margin-right: 2px;

  &:hover{
      @media(min-width: ${({ theme }) => theme.breakPoints.mobileMax}px){
    transition: 2s;
    background-image: linear-gradient(45deg, violet, red, orange, yellow, green, blue, indigo);
    -webkit-background-clip: text;
    color: transparent;
   };
  }; 

  &.active {     
    border: 1px solid white;
    border-radius: 45px;
  };

 @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 12px;
    line-height: 18px;
    padding: 8px 12px;
  };
`;

export const SearchContainer = styled.div`
  width: 400px;
  height: 40%;
  justify-content: flex-end; 
  align-items: center;
  display: flex;

  @media(max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: 100%;
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    justify-content: center;   
    height: 44px;
    width: 90%;
  };
`;