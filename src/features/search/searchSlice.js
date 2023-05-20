import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState:
  {
    moviesList: null,
    peopleList: null,
    status: null,
    page: 1,
    query: null
  },

  reducers: {
    fetchSearchMoviesList: (_, { payload: { page, query } }) => ({
      status: "loading",
      peopleList: null,
      moviesList: null,
      query,
      page
    }),
    fetchSearchMoviesListSuccess: (_, { payload: moviesList }) => ({
      status: "success",
      moviesList,
    }),
    fetchSearchMoviesListError: () => ({
      status: "error",
      moviesList: null,
    }),
    fetchSearchPeopleList: (_, { payload: { page, query } }) => ({
      status: "loading",
      peopleList: null,
      moviesList: null,
      page,
      query,
    }),
    fetchSearchPeopleListSuccess: (_, { payload: peopleList }) => ({
      status: "success",
      peopleList,
    }),
    fetchSearchPeopleListError: () => ({
      status: "error",
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
export const selectSearchMovies = state => state.search.moviesList;
export const selectSearchPeople = state => state.search.peopleList;
export const selectSearchStatus = state => state.search.status;
export default searchSlice.reducer;