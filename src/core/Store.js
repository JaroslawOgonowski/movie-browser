import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import searchReducer from "../features/search/searchSlice";
import popularMoviesReducer from "../features/moviesPage/popularMoviesSlice";
import popularPeopleReducer from "../features/peoplePage/popularPeopleSlice";
import movieReducer from "../features/moviesPage/moviePage/movieSlice";
import personReducer from "../features/peoplePage/personPage/personSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        search: searchReducer,
        popularMovies: popularMoviesReducer,
        popularPeople: popularPeopleReducer,
        movie: movieReducer,
        person: personReducer
        },
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;