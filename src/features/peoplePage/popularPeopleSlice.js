import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState:
  {
    popularPeopleList: null,
    status: null,
  },

  reducers: {
    fetchPopularPeople: (page) => ({
      status: "loading",
      popularPeopleList: null,
      page
    }),
    fetchPopularPeopleSuccess: (_, { payload: popularPeopleList }) => ({
      status: "success",
      popularPeopleList,
      page: popularPeopleList.page
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
  fetchPopularPeopleError,
  fetchPopularPeoplePageModifer
} = popularPeopleSlice.actions;

export const selectStatePopularPeople = (state) => state.popularPeople;
export const selectPopularPeopleStatus = (state) => selectStatePopularPeople(state).status
export const selectPopularPeopleList = (state) => selectStatePopularPeople(state).popularPeopleList;
export const selectPeoplePage = (state) => selectStatePopularPeople(state).page;
export default popularPeopleSlice.reducer;