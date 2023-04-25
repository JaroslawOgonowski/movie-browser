import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState:
  {
    moviesList: null,
    status: null,
  },

  reducers: {
    fetchSearchMoviesList: (_, {payload: query}) => ({
      status: "loading",
      moviesList: null,
      query
    }),
    fetchSearchMoviesListSuccess: (_, { payload: moviesList }) => ({
      status: "success",
      moviesList,
    }),
    fetchSearchMoviesListError: () => ({
      status: "error",
      moviesList: null,
    }),
  },
});

export const {
  fetchSearchMoviesList,
  fetchSearchMoviesListSuccess,
  fetchSearchMoviesListError,
} = searchSlice.actions;

export const selectState = state => state.search;
export const selectMovies = state => state.search.moviesList;
export default searchSlice.reducer;