const summary = (state = null, action) => {
  switch(action.type) {
    case 'ADD_SUMMARY':
      return action.payload.summary;
    case 'CLEAR':
      return null;
    default:
      return state;
  }
}

export default summary;