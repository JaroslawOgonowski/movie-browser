import { useDispatch } from "react-redux";
import {
  selectingNavigationMovies,
  selectingNavigationPeople
} from "../../core/generalSlice";
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
    <nav>
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
                <StyledNavLink to="/movies"
                  onClick={() => dispatch(selectingNavigationMovies())}>
                  Movies
                </StyledNavLink>
              </ListItem>
              <ListItem>
                <StyledNavLink to="/people"
                  onClick={() => dispatch(selectingNavigationPeople())}>
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
    </nav>
  );
};