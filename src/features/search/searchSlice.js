import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState:
  {
    moviesList: null,
    peopleList: null,
    statusMovie: null,
    statusPeople: null
  },

  reducers: {
    fetchSearchMoviesList: (_, { payload: query }) => ({
      statusMovie: "loading",
      statusPeople: null,
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
    fetchSearchPeopleList: (_, { payload: query }) => ({
      statusPeople: "loading",
      statusMovie: null,
      peopleList: null,
      moviesList: null,
      query
    }),
    fetchSearchPeopleListSuccess: (_, { payload: peopleList }) => ({
      statusPeople: "success",
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
export const selectSearchPeople = state => state.search.peopleList;
export const selectSearchMoviesStatus = state =>state.search.statusMovie;
export const selectSearchPeopleStatus = state =>state.search.statusPeople;
export default searchSlice.reducer;