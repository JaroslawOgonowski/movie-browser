import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState:
  {
    moviesList: null,
    status: null,
  },

  reducers: {
    fetchMoviesList: (_, {payload: query}) => ({
      status: "loading",
      moviesList: null,
      query
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
} = searchSlice.actions;

export const selectState = state => state.search;
export const selectMovies = state => state.search.moviesList;
export default searchSlice.reducer;