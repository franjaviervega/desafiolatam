import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import RootProductReducer from './modules/product/';

const reducers = combineReducers({
    product: RootProductReducer
}) 

const store = createStore(reducers, applyMiddleware(thunk,logger));

export default store;