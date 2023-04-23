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

export const Header = () => {
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
                  <StyledNavLink to="/movies">Movies</StyledNavLink>
                </ListItem>
                <ListItem>
                  <StyledNavLink to="/actors">Actors</StyledNavLink>
                </ListItem>
              </List>
            </Container>
            <SearchContainer>
              <Search placeholder="Search for movies..." />
            </SearchContainer>
          </HeaderBox>
        </StyledHeader>
      </nav>

      <Routes>
        <Route path="/movies" element={<NoResultPage />} />
        <Route path="/actors" element={<ErrorPage />} />
        <Route path="/" element={<Navigate to="/movies" />} />
      </Routes>

    </HashRouter>
  );
};