import { BASE_URL } from './config';

export const getCountriesLatest = (sort = 'confirmed_desc') => dispatch => {
  fetch(`${BASE_URL}/countries/latest?sort=${sort}`)
  .then(res => res.json())
  .then(json => dispatch({
    type: 'ADD_COUNTRIES_LATEST',
    payload: { countries: json }
  }));
}

export const getCountryData = country => dispatch => {
  fetch(`${BASE_URL}/countries/${country}`)
  .then(res => res.json())
  .then(json => dispatch({
    type: 'ADD_COUNTRIES_ALL',
    payload: { countries: json }
  }));
}

export const getCountryList = () => dispatch => {
  fetch(`${BASE_URL}/country`)
  .then(res => res.json())
  .then(json => dispatch({
    type: 'ADD_COUNTRY_LIST',
    payload: { countryList: json }
  }));
}