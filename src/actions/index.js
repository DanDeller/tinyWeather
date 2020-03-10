let searchCityId = 0;

export const setCity = city => ({
  type: 'SET_CITY',
  city
});

export const searchCity = search_city => ({
  type: 'SEARCH_CITY',
  id: searchCityId++,
  search_city
});