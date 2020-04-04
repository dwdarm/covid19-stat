import { combineReducers } from 'redux';
import summary from './summary.reducer';
import countriesLatest from './countries-latest.reducer';

const reducers = combineReducers({
  summary, 
  countriesLatest
});

export default reducers;