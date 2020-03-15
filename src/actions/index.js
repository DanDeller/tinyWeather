let recentCityId = 0;

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
  id: recentCityId++,
  recent_city
});

export const isOpen = isOpen => ({
  type: 'IS_OPEN',
  isOpen
});

export const visible = visible => ({
  type: 'VISIBLE',
  visible
});