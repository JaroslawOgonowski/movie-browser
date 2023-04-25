import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import generalReducer from "./generalSlice";
import moviesReducer from "../features/moviesPage/moviesSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        general: generalReducer,
        movies: moviesReducer,
    },
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;