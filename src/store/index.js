import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cashReducer } from './cash_reducer'
import { customerReducer } from './customer_reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../asyncAction/sagas/index"

export default configureStore({
    reducer: {
        posts: postsReducer
    }
});

const rootReducer = combineReducers({
    cash: cashReducer, //cash - ключ значение, для сокращенного использования имени
    customers: customerReducer,
})

const sagaMiddleware = createSagaMiddleware(); 

const reducer = {
    posts: postsReducer,
    cash: cashReducer, //cash - ключ значение, для сокращенного использования имени
    customers: customerReducer
}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware) 
});

sagaMiddleware.run(rootSaga);
