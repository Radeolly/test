import {createStore, combineReducers} from 'redux'
import {cashReducer} from './cash_reducer'
import {customerReducer} from './customer_reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    cash: cashReducer, //cash - ключ значение, для сокращенного использования имени
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
