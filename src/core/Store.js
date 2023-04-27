import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import generalReducer from "./generalSlice";
import searchReducer from "../features/search/searchSlice";
import popularMoviesReducer from "../features/moviesPage/popularMoviesSlice";
import genresReducer from "../features/moviesPage/Genres/genresSlice";
import popularPeopleReducer from "../features/peoplePage/popularPeopleSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        general: generalReducer,
        search: searchReducer,
        popularMovies: popularMoviesReducer,
        genres: genresReducer,
        popularPeople: popularPeopleReducer,
        },
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;