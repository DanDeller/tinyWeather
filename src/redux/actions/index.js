/* 
 * MAIN ACTIONS INDEX FILE
 * - WeatherMain.js
 *  - setCity, setDetails, recentCity, isOpen, visible, setVideo
 * 
 *  - async actions
 *   - fetchRecentCitiesError
 */

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

// imported into fetchRecentCities.js
export const fetchRecentCitiesError = (error) => ({
  type: 'FETCH_RECENTCITIES_ERROR',
  error: error
});

// imported into postRecentCities.js
// export const postRecentCitiesSuccess = (city) => ({
//   type: 'POST_RECENTCITIES_SUCCESS',
//   products: city
// });

// export const postRecentCitiesError = (error) => ({
//   type: 'POST_RECENTCITIES_ERROR',
//   error: error
// });