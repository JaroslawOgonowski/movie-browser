import { Route, HashRouter, Redirect, Switch } from "react-router-dom";
import { MoviesPage } from "../../features/moviesPage";
import { ActorsPage } from "../../features/actorsPage";
import NoResultPage from "../NoResultPage";
import ErrorPage from "../ErrorPage";
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
import { selectingNavigationActors, selectingNavigationMovies } from "../../core/generalSlice";
import { Search } from "../../features/search";

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
                  <StyledNavLink to="/actors"
                    onClick={() => dispatch(selectingNavigationActors())}>
                    Actors
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
        <Route path="/movies"><NoResultPage /></Route>
        <Route path="/actors"><ErrorPage /></Route>
        <Route path="/">
          <Redirect to="/movies" /></Route>
      </Switch>
    </HashRouter >
  );
};