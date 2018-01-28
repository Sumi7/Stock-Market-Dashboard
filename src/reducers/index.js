import { combineReducers } from 'redux';
import fetchStocks from './fetchStock';
import fetchSymbol from './fetchSymbol';

const rootReducer = combineReducers({
    fetchStocks,
    fetchSymbol
});

export default rootReducer;
