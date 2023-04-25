import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState:
  {
    moviesList: null,
    status: null,
  },

  reducers: {
    fetchMoviesList: () => ({
      status: "loading",
      moviesList: null,
    }),
    fetchMoviesListSuccess: (_, { payload: moviesList }) => ({
      status: "success",
      moviesList,
    }),
    fetchMoviesListError: () => ({
      status: "error",
      moviesList: null,
    }),
  },
});

export const {
  fetchMoviesList,
  fetchMoviesListSuccess,
  fetchMoviesListError,
} = moviesSlice.actions;

export const selectState = state => state.movies;
export const selectMovies = state => state.movies.moviesList;
export default moviesSlice.reducer;