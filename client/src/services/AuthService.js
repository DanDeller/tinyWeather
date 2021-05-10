import axios from 'axios';

export default {
  /**
   * Log user in
   * 
   * @param user
   */
  login: (user) => {
    return axios.post('http://localhost:3001/login', user)
    .then((res) => {
      console.log(res.data)
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
    return axios.post('http://localhost:3001/register', user)
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
    return axios.get('http://localhost:3001/logout')
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
    return await fetch('http://localhost:3001/user')
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
  }
};