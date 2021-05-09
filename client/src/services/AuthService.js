import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

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
    // return axios.get('/user')
    // .then((res) => {
    //   const data = res.data;
    //   console.log(data);
    //   return data;
    // })
    // .catch((err) => console.log(err));

    return await fetch('/user')
		.then(res => {
      console.log(res)
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
  }
};