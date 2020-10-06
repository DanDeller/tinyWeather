import axios from 'axios';

// axios.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('tinyWeatherToken');
//     config.headers.authorization = `Bearer ${token}`;
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export default {
  /**
   * Log user in
   * 
   * @param user
   */
  login: (user) => {
    return axios.post('/login', user)
    .then((res) => {
      if (res.status !== 401) {
        const data = res.data;
        return data;
      } else {
        return { 
          isAuthenticated: false, 
          user: {
            username: ''
          }
        };
      }
    })
    .catch((err) => console.log(err));
  },

  /**
   * Register new user
   * 
   * @param user
   */
  register: (user) => {
    return axios.post('/register', user)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((err) => console.log(err));
  },

  /**
   * Log user out
   */
  logout: () => {
    return axios.get('/logout')
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((err) => console.log(err));
  },

  /**
   * Get authenticated user
   */
  isAuthenticated: async () => {
    return await fetch('/user')
		.then(res => {
			if (res.status !== 401) {
        const data = res.json().then(data => data)
				return data;
			} else {
				return { 
					isAuthenticated: false, 
					user: {
						username: ''
					}
				};
			};
    })
    .catch((err) => console.log(err));

    // NOTE: axios for /user breaks app
    //
    // return axios.get('/user')
    // .then((res) => {
    //   console.log(res)
    //   if (res.status !== 401) {
    //     const data = res.data;
    //     return data;
    //   } else {
    //     return { 
    //       isAuthenticated: false, 
    //       user: {
    //         username: ''
    //       }
    //     };
    //   };
    // })
    // .catch((err) => console.log(err));
  }
};