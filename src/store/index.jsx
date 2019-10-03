import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import RootProductReducer from './modules/product/';
import rootReducer from './modules/auth/'

const reducers = combineReducers({
    product: RootProductReducer,
    rootReducer
}) 
 
const datos = createStore(reducers, applyMiddleware(thunk,logger));

export default datos;