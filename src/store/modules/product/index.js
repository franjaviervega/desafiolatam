//combine reducer
import {combineReducers} from 'redux';
import productReducer from './product.reducer'; 

const RootProductReducer = combineReducers({
    getAll: productReducer 
});

export default RootProductReducer; 