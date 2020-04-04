import { BASE_URL } from './config';

export const getSummary = () => dispatch => {
  fetch(`${BASE_URL}/summary`)
  .then(res => res.json())
  .then(json => dispatch({
    type: 'ADD_SUMMARY',
    payload: { summary: json }
  }));
}