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

// fiveDayForecast actions
export const prevCity = prevCity => ({
  type: 'PREV_CITY',
  prevCity
});

// React Thunk action related items
// - imported into fetchProducts.js
export const fetchProductsPending = () => ({
  type: 'FETCH_PRODUCTS_PENDING'
});

export const fetchProductsSuccess = (products) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  products: products
});

export const fetchProductsError = (error) => ({
  type: 'FETCH_PRODUCTS_ERROR',
  error: error
});