import styled from "styled-components";
import { ReactComponent as Icon } from "./Video.svg";
import { NavLink } from "react-router-dom";
const activeClassName = "active"

export const StyledIcon = styled(Icon)`
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    width: 17px;
  };
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.color.mainWhite};
  background-color: ${({ theme }) => theme.color.mainBlack};

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    height: 142px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  };
`;

export const Container = styled.div`
  max-width: 1368px;
  display: flex;
  align-items: center;
  gap: 80px;
  
  @media(max-width: ${({ theme }) => theme.breakPoints.notebook}px) {
    margin: 0 16px;
    gap: 40px;
  };
`;

export const TitleBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12px;
 
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    gap: 8px;
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
  line-height: 130%;
  };
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 16px;
`;

export const ListItem = styled.li`
  text-decoration: none;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;
      padding: 13.5px 24px;

      &.${activeClassName} {     
        border: 1px solid;
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
  display: flex;
  
  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    justify-content: center;
    height: 44px;
    width: 90%;
  };
`;

export const IconContainer = styled.div`
  width: 32px;
  border-radius: 45px 0 0 45px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.mainWhite};
`;

export const Search = styled.input`
  width: 100%;
  padding-left: 12px;
  display: block;
  border: none;
  border-radius: 0 45px 45px 0;
  margin-right: 16px;
  :focus {
    outline: none;
  };
  ::placeholder{
    color:  ${({ theme }) => theme.color.darkerGray};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;    
  };

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    max-width: 288px;
    margin-right: 0;
  };
`;
