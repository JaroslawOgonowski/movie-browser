import { useLocation } from "react-router-dom";
import { Search } from "../../features/search";
import {
  Container,
  HeaderBox,
  HomePageLink,
  List, ListItem,
  PageTitle,
  SearchContainer,
  StyledHeader,
  StyledIcon,
  StyledNavLink,
  TitleBox
} from "./styled";

export const Header = () => {
  const location = useLocation().pathname
  const activator = "true";
  
  return (
    <>
      <StyledHeader>
        <HeaderBox>
          <Container>
            <HomePageLink to="/">
              <TitleBox>
                <StyledIcon />
                <PageTitle>Movies Browser</PageTitle>
              </TitleBox>
            </HomePageLink>
            <List>
              <ListItem>
                <StyledNavLink to="/movies" activator={location.includes("/movie")? activator : null}>
                  Movies
                </StyledNavLink>
              </ListItem>
              <ListItem>
                <StyledNavLink to="/people" activator={location.includes("/person")? activator : null}>
                  People
                </StyledNavLink>
              </ListItem>
            </List>
          </Container>
          <SearchContainer>
            <Search />
          </SearchContainer>
        </HeaderBox>
      </StyledHeader>
    </>
  );
};