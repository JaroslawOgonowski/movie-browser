import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

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
                <StyledNavLink to="/movies">
                  Movies
                </StyledNavLink>
              </ListItem>
              <ListItem>
                <StyledNavLink to="/people">
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