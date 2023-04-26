import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState:
  {
    popularPeopleList: null,
    status: null,
  },

  reducers: {
    fetchPopularPeople: () => ({
      status: "loading",
      popularPeopleList: null,
    }),
    fetchPopularPeopleSuccess: (_, { payload: popularPeopleList }) => ({
      status: "success",
      popularPeopleList,
    }),
    fetchPopularPeopleError: () => ({
      status: "error",
      popularPeopleList: null,
    }),
  },
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError
} = popularPeopleSlice.actions;

export const selectStatePopularPeople = (state) => state.popularPeople;
export const selectPopularPeopleStatus = (state) => selectStatePopularPeople(state).status
export const selectPopularPeopleList = (state) => selectStatePopularPeople(state).popularPeopleList;
export default popularPeopleSlice.reducer;