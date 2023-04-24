import { createSlice } from "@reduxjs/toolkit";
import { getStateFromLocalStorage } from "./localStorageState";

const generalSlice = createSlice({
  name: "general",
  initialState:
    getStateFromLocalStorage() ||
    {
      navigationSelected: "movies",
    },

  reducers: {
    selectingNavigationMovies: (state) => {
      state.navigationSelected = "movies";
    },
    selectingNavigationActors: (state) => {
      state.navigationSelected = "actors";
    }
  },
});

export const {
  selectingNavigationMovies,
  selectingNavigationActors
} = generalSlice.actions;

export const selectState = state => state.general;
export const selectNavigationSelected = state => state.general.navigationSelected;

export default generalSlice.reducer;