const searchCity = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_CITY':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
};

export default searchCity;