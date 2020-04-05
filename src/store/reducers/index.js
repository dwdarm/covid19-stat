import { combineReducers } from 'redux';
import summary from './summary.reducer';
import countriesLatest from './countries-latest.reducer';
import countriesAll from './countries-all.reducer';
import countryList from './country-list.reducer';

const reducers = combineReducers({
  summary, 
  countriesLatest,
  countriesAll,
  countryList
});

export default reducers;