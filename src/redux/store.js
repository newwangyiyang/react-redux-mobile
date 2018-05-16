import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { appData } from './App/reducer'
import { homeData } from './Home/reducer'
let reducer = combineReducers(
    {app: appData, home: homeData}
);
let store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;