import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState:
  {
    popularMoviesList: null,
    status: null,
  },

  reducers: {
    fetchPopularMovies: (page) => ({
      status: "loading",
      popularMoviesList: null,
      page
    }),
    fetchPopularMoviesSuccess: (_, { payload: popularMoviesList }) => ({
      status: "success",
      popularMoviesList,
      page: popularMoviesList.page
    }),
    fetchPopularMoviesError: () => ({
      status: "error",
      popularMoviesList: null,
    }),
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError
} = popularMoviesSlice.actions;

export const selectStatePopularMovies = (state) => state.popularMovies;
export const selectPopularMoviesStatus = (state) => selectStatePopularMovies(state).status
export const selectPopularMoviesList = (state) => selectStatePopularMovies(state).popularMoviesList;
export const selectMoviesPage = (state) => selectStatePopularMovies(state).page;
export default popularMoviesSlice.reducer;

