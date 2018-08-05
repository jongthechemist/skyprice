import { combineReducers } from 'redux';
import search from './searchReducer';
import flights from './flightReducer';

const Reducer = combineReducers({
  search,
  result: flights
});

export default Reducer;