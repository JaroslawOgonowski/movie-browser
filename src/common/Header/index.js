import { Route, Navigate, Routes, HashRouter } from "react-router-dom";
import { MoviesPage } from "../../features/moviesPage";
import { ActorsPage } from "../../features/actorsPage";
import { List, ListItem, Navigation, PageTitle, Search, StyledHeader, StyledNavLink, TitleBox } from "./styled";
import { ReactComponent as Icon } from "./Video.svg";
import { ReactComponent as SearchIcon } from "./Search.svg";
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

      
        <Search placeholder="🔍Search for movies..." />
      </StyledHeader>
      </Navigation>
         <Routes>
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/" element={<Navigate to="/movies" />} />
          </Routes>
         
    </HashRouter>
  );
};