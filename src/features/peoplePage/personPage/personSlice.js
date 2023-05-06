import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState:
  {
    personInfo: null,
    status: null,

  },

  reducers: {
    fetchPersonById: (_, {payload: id}) => ({
      status: "loading",
      personInfo: null,
      id
    }),
    fetchPersonByIdSuccess: (_, { payload: personInfo }) => ({
      status: "success",
      personInfo,
    }),
    fetchPersonByIdError: () => ({
      status: "error",
      personInfo: null,
    }),
  },
});

export const {
  fetchPersonById,
  fetchPersonByIdSuccess,
  fetchPersonByIdError
} = personSlice.actions;

export const selectPerson = (state) => state.person;
export const selectPersonStatus = (state) => selectPerson(state).status
export const selectPersonInfo = (state) => selectPerson(state).personInfo;

export default personSlice.reducer;
