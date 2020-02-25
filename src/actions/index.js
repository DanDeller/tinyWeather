let cityId = 0;

export const searchCity = text => ({
  type: 'SEARCH_CITY',
  id: cityId++,
  text
});