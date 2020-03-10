let searchCityId = 0;

export const setCity = city => ({
  type: 'SET_CITY',
  city
});

export const recentCity = recent_city => ({
  type: 'RECENT_CITY',
  id: searchCityId++,
  recent_city
});