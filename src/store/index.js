import {createStore, combineReducers, applyMiddleware} from 'redux'
import {cash} from './cashSlice'
import {customer} from './customer_reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'

// const rootReducer = combineReducers({
//     cash: cashReducer, //cash - ключ значение, для сокращенного использования имени
//     customers: customerReducer,
// })
//export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export const store = configureStore({
    reducer: {
        cash: cash.reducer, //cash - ключ значение, для сокращенного использования имени
        customers: customer.reducer
    }
  });