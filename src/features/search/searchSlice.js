import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState:
  {
    moviesList: null,
    peopleList: null,
    statusMovie: null,
    statusPople: null
  },

  reducers: {
    fetchSearchMoviesList: (_, {payload: query}) => ({
      statusMovie: "loading",
      statusPople: null,
      peopleList: null,
      moviesList: null,
      query
    }),
    fetchSearchMoviesListSuccess: (_, { payload: moviesList }) => ({
      statusMovie: "success",
      moviesList,
    }),
    fetchSearchMoviesListError: () => ({
      statusMovie: "error",
      moviesList: null,
    }),
    fetchSearchPeopleList: (_, {payload: query}) => ({
      statusPople: "loading",
      statusMovie: null,
      peopleList: null,
      moviesList: null,
      query
    }),
    fetchSearchPeopleListSuccess: (_, { payload: peopleList }) => ({
      statusPople: "success",
      peopleList,
    }),
    fetchSearchPeopleListError: () => ({
      statusPople: "error",
      peopleList: null,
    }),    
  },
});

export const {
  fetchSearchMoviesList,
  fetchSearchMoviesListSuccess,
  fetchSearchMoviesListError,
  fetchSearchPeopleList,
  fetchSearchPeopleListSuccess,
  fetchSearchPeopleListError
} = searchSlice.actions;

export const selectState = state => state.search;
export const selectMovies = state => state.search.moviesList;
export default searchSlice.reducer;