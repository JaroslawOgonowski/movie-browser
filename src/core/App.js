
import { HashRouter, Route, NavLink, Navigate, Routes } from "react-router-dom";
import { MoviesPage } from "../features/moviesPage";
import { ActorsPage } from "../features/actorsPage";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Loader from "../common/Loader";

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <HashRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/actors">Actors</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/actors" element={<Loader />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </nav>
    </HashRouter>
  </ThemeProvider>
);