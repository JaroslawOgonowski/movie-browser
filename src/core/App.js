import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Header } from "../common/Header";
import { theme } from "./theme";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";
import { MoviesPage } from "../features/moviesPage";
import { PeoplePage } from "../features/peoplePage";
import { MoviePage } from "../features/moviesPage/moviePage";
import { PersonPage } from "../features/peoplePage/personPage";

export default () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HashRouter>
          <Header />
          <Switch>
            <Route path="/movies"><MoviesPage /></Route>
            <Route path="/people"><PeoplePage /></Route>
            <Route path="/movie"><MoviePage /></Route>
            <Route path="/person"><PersonPage /></Route>
            <Route path="/">
              <Redirect to="/movies" /></Route>
          </Switch>
        </HashRouter >
      </ThemeProvider>
    </>
  );
};