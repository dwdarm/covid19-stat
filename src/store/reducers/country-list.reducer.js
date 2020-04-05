const countryList = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COUNTRY_LIST':
      return action.payload.countryList;
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export default countryList;