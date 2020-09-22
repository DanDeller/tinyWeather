import axios from 'axios';

export default {
  /**
   * Log user in
   * 
   * @param user
   */
  login: async user => {
    return await fetch('/login', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status !== 401) {
        return res.json().then(data => data);
      } else {
        return { 
          isAuthenticated: false, 
          user: {
            username: ''
          }
        };
      }
    });
  },

  /**
   * Register new user
   * 
   * @param user
   */
  register: async user => {
    const userData = user;
    try {
      await axios.post('/register', userData)
      .then(res => res.json())
      .then(data => {
        const newUser = data;
        console.log(newUser);
        return newUser;
      });
    } catch(error) {
      console.log(error);
    }
  },

  /**
   * Log user out
   */
  logout: async () => {
    try {
      await axios.post('/logout')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return data;
      })
    } catch(error) {
      console.log(error);
    }
  },

  /**
   * Get authenticated user
   */
  isAuthenticated: () => {
    return fetch('/user')
		.then(res => {
			if(res.status !== 401) {
				const data = res.json().then(data => data)
				console.log(data);
				return data;
			} else {
				return { 
					isAuthenticated: false, 
					user: {
						username: ''
					}
				};
			};
		});
  }
};