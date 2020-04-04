const countriesLatest = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COUNTRIES_LATEST':
      return action.payload.countries;
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export default countriesLatest;