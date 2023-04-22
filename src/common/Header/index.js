import { Route, Navigate, Routes, HashRouter } from "react-router-dom";
import { MoviesPage } from "../../features/moviesPage";
import { ActorsPage } from "../../features/actorsPage";
import { IconContainer, List, ListItem, Navigation, PageTitle, Search, SearchContainer, StyledHeader, StyledNavLink, TitleBox } from "./styled";
import { ReactComponent as Icon } from "./Video.svg";
import { ReactComponent as SearchIcon } from "./Search.svg";
import NoResultPage from "../NoResultPage";
import ErrorPage from "../ErrorPage";
export const Header = () => {

  return (

    <HashRouter><Navigation>
      <StyledHeader>
        <TitleBox>
          <Icon /><PageTitle>Movies Browser</PageTitle>
        </TitleBox>
        <List>
          <ListItem>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/actors">Actors</StyledNavLink>
          </ListItem>
        </List>
        <SearchContainer>
          <IconContainer>
            <SearchIcon />
          </IconContainer>
          <Search placeholder="Search for movies..." />
        </SearchContainer>
      </StyledHeader>
    </Navigation>

      <Routes>
        <Route path="/movies" element={<NoResultPage />} />
        <Route path="/actors" element={<ErrorPage />} />
        <Route path="/" element={<Navigate to="/movies" />} />
      </Routes>

    </HashRouter>
  );
};