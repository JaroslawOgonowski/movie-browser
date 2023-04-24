import { Route, Navigate, Routes, HashRouter } from "react-router-dom";
import { MoviesPage } from "../../features/moviesPage";
import { ActorsPage } from "../../features/actorsPage";
import NoResultPage from "../NoResultPage";
import ErrorPage from "../ErrorPage";
import {
  Container,
  HeaderBox,
  List, ListItem,
  PageTitle,
  Search,
  SearchContainer,
  StyledHeader,
  StyledIcon,
  StyledNavLink,
  TitleBox
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectNavigationSelected, selectingNavigationActors, selectingNavigationMovies } from "../../core/generalSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigationSelector = useSelector(selectNavigationSelected);

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
              <Search
                placeholder={
                  navigationSelector === "movies" ?
                    "Search for movies..." :
                    "Search for people..."
                } />
            </SearchContainer>
          </HeaderBox>
        </StyledHeader>
      </nav>

      <Routes>
        <Route path="/movies" element={<NoResultPage />} />
        <Route path="/actors" element={<ErrorPage />} />
        <Route path="/" element={<Navigate to="/movies" />} />
      </Routes>

    </HashRouter >
  );
};