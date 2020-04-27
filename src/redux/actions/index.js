// currentWeather actions
export const setCity = city => ({
  type: 'SET_CITY',
  city
});

export const setDetails = cityDetails => ({
  type: 'SET_DETAILS',
  cityDetails
});

export const recentCity = (recent_city, id) => ({
  type: 'RECENT_CITY',
  id,
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

export const setVideo = video => ({
  type: 'SET_VIDEO',
  video
});

// fetchRecentCities.js 
// - imported into fetchRecentCities.js
export const fetchRecentCitiesPending = () => ({
  type: 'FETCH_RECENTCITIES_PENDING'
});

export const fetchRecentCitiesSuccess = (products) => ({
  type: 'FETCH_RECENTCITIES_SUCCESS',
  products: products
});

export const fetchRecentCitiesError = (error) => ({
  type: 'FETCH_RECENTCITIES_ERROR',
  error: error
});

// postRecentCities.js 
// - imported into postRecentCities.js
export const postRecentCitiesPending = () => ({
  type: 'POST_RECENTCITIES_PENDING'
});

export const postRecentCitiesSuccess = (products) => ({
  type: 'POST_RECENTCITIES_SUCCESS',
  products: products
});

export const postRecentCitiesError = (error) => ({
  type: 'POST_RECENTCITIES_ERROR',
  error: error
});