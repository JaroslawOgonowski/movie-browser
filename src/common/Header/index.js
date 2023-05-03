import { Route, HashRouter, Redirect, Switch } from "react-router-dom";
import { MoviesPage } from "../../features/moviesPage";
import { PeoplePage } from "../../features/peoplePage";
import {
  Container,
  HeaderBox,
  List, ListItem,
  PageTitle,
  SearchContainer,
  StyledHeader,
  StyledIcon,
  StyledNavLink,
  TitleBox
} from "./styled";
import { useDispatch } from "react-redux";
import { selectingNavigationMovies, selectingNavigationPeople } from "../../core/generalSlice";
import { Search } from "../../features/search";
import { MoviePage } from "../../features/moviesPage/moviePage";
import { PersonPage } from "../../features/peoplePage/personPage";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <HashRouter>
      <nav>
        <StyledHeader>
          <HeaderBox>
            <Container>
              <TitleBox>
                <StyledIcon />
                <PageTitle>Movies Browser</PageTitle>
              </TitleBox>
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

      <Switch>
        <Route path="/movies"><MoviesPage /></Route>
        <Route path="/people"><PeoplePage /></Route>
        <Route path="/movie"><MoviePage /></Route>
        <Route path="/person"><PersonPage/></Route>
        <Route path="/">
          <Redirect to="/movies" /></Route>
      </Switch>
    </HashRouter >
  );
};