import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import generalReducer from "./generalSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        general: generalReducer,
    },
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;