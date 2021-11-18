
import {createStore,applyMiddleware} from "redux";

import thunk from 'redux-thunk';
import AuthReducers from "./AuthReducer";
let reduxStore = createStore( AuthReducers,applyMiddleware(thunk));
export default reduxStore;