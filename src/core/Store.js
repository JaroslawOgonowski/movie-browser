import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import generalReducer from "./generalSlice";
import searchReducer from "../features/search/searchSlice";
import popularMoviesReducer from "../features/moviesPage/popularMoviesSlice";
import popularPeopleReducer from "../features/peoplePage/popularPeopleSlice";
import movieReducer from "../features/moviesPage/moviePage/movieSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        general: generalReducer,
        search: searchReducer,
        popularMovies: popularMoviesReducer,
        popularPeople: popularPeopleReducer,
        movie: movieReducer,
        },
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;