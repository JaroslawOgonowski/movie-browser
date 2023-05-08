import React from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Header } from "../common/Header";
import { theme } from "./theme";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";
import { MoviesPage } from "../features/moviesPage";
import { PeoplePage } from "../features/peoplePage";
import { MoviePage } from "../features/moviesPage/moviePage";
import { PersonPage } from "../features/peoplePage/personPage";
import ErrorPage from "../common/ErrorPage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

export default () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <HashRouter>
            <Header />
            <Switch>
              <Route path="/movies"><MoviesPage /></Route>
              <Route path="/people"><PeoplePage /></Route>
              <Route path="/movie"><MoviePage /></Route>
              <Route path="/person"><PersonPage /></Route>
              <Route path="/">
                <Redirect to="/movies?page=1" /></Route>
            </Switch>
          </HashRouter >
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};