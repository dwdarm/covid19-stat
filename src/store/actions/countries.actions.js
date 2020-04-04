import { BASE_URL } from './config';

export const getCountriesLatest = (sort = 'confirmed_desc') => dispatch => {
  fetch(`${BASE_URL}/countries/latest?sort=${sort}`)
  .then(res => res.json())
  .then(json => dispatch({
    type: 'ADD_COUNTRIES_LATEST',
    payload: { countries: json }
  }));
}