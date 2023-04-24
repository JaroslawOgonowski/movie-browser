import { createSlice } from "@reduxjs/toolkit";
import { getStateFromLocalStorage } from "./localStorageState";

const generalSlice = createSlice({
  name: "general",
  initialState:
    getStateFromLocalStorage() ||
    {
      navigationSelected: "movies",
      query: null
    },

  reducers: {
    selectingNavigationMovies: (state) => {
      state.navigationSelected = "movies";
    },
    selectingNavigationActors: (state) => {
      state.navigationSelected = "actors";
    },
    changeQuery: (state, {payload:query}) => {
     state.query = query; 
    }
  },
});

export const {
  selectingNavigationMovies,
  selectingNavigationActors,
  changeQuery
} = generalSlice.actions;

export const selectState = state => state.general;
export const selectNavigationSelected = state => state.general.navigationSelected;
export const selectQuery = state => state.general.query;
export default generalSlice.reducer;