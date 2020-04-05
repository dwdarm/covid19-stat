const countriesAll = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_COUNTRIES_ALL':
      return {
        ...state,
        [action.payload.countries['Country/Region']]: action.payload.countries
      }
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export default countriesAll;