import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        genres: [],
        status: "initial",
    },

    reducers: {
        fetchGenres: () => ({
            status: "loading",
        }),

        fetchGenresSuccess: (_, { payload: genres }) => ({
            status: "success",
            genres,
        }),

        fetchGenresError: () => ({
            status: "error",
        }),
    },
});

export const {fetchGenres, fetchGenresSuccess, fetchGenresError} = genresSlice.actions;

export const selectGenres = (state) => state.genres.genres;
export const selectGenresStatus = (state) => selectGenres(state).status;

export default genresSlice.reducer;