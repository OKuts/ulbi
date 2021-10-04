import {combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReduser";
import {customerReducer} from "./customerReduser";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools());