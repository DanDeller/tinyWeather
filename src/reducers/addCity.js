const searchCity = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_CITY':
      return [
        ...state,
        {
          id: action.id,
          city: action.city
        }
      ]
    default:
      return state
  }
};

export default searchCity;