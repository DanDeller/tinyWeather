let searchCityId = 0;

export const setCity = city => ({
  type: 'SET_CITY',
  city
});

export const setDetails = cityDetails => ({
  type: 'SET_DETAILS',
  cityDetails
});

export const recentCity = recent_city => ({
  type: 'RECENT_CITY',
  recent_city
});