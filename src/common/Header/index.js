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
                <StyledNavLink to="/movies" active={location.includes("/movie")? true : false}>
                  Movies
                </StyledNavLink>
              </ListItem>
              <ListItem>
                <StyledNavLink to="/people" active={location.includes("/person")? true : false}>
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