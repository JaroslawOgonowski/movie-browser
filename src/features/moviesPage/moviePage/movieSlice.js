import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState:
  {
    movieInfo: null,
    status: null,

  },

  reducers: {
    fetchMovieById: (_, {payload: id}) => ({
      status: "loading",
      movieInfo: null,
      id
    }),
    fetchMovieByIdSuccess: (_, { payload: movieInfo }) => ({
      status: "success",
      movieInfo,
    }),
    fetchMovieByIdError: () => ({
      status: "error",
      movieInfo: null,
    }),
  },
});

export const {
  fetchMovieById,
  fetchMovieByIdSuccess,
  fetchMovieByIdError
} = movieSlice.actions;

export const selectMovie = (state) => state.movie;
export const selectMovieStatus = (state) => selectMovie(state).status
export const selectMovieInfo = (state) => selectMovie(state).movieInfo;

export default movieSlice.reducer;
