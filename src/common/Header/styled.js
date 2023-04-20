import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "active"

export const StyledHeader = styled.header`
width: 100%;
height: 94px;
display: flex;
align-items: center;
justify-content: space-evenly;
gap: 104px;
font-family: 'Poppins', sans-serif;
color: ${({ theme }) => theme.color.mainWhite};
background-color: ${({ theme }) => theme.color.mainBlack};
`;

export const TitleBox = styled.div`
display: flex;
gap: 12px;
align-items: center;
`;

export const PageTitle = styled.h1`
margin: 0;
font-weight: 500;
font-size: 24px;
`;

export const Navigation = styled.nav`

`;

export const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
gap: 64px;
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
`;

export const Search = styled.input`
padding-left: 24px;
display: block;
border: none;
width: 30%;
height: 40%;
border-radius: 45px;
`;
