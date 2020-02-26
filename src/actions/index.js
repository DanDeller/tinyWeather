let cityId = 0;

export const searchCity = city => ({
  type: 'SEARCH_CITY',
  id: cityId++,
  city
});