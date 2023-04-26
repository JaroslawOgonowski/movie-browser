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
    selectingNavigationPeople: (state) => {
      state.navigationSelected = "people";
    },
    changeQuery: (state, {payload:query}) => {
     state.query = query; 
    }
  },
});

export const {
  selectingNavigationMovies,
  selectingNavigationPeople,
  changeQuery
} = generalSlice.actions;

export const selectState = state => state.general;
export const selectNavigationSelected = state => state.general.navigationSelected;
export const selectQuery = state => state.general.query;
export default generalSlice.reducer;