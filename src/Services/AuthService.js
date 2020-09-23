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
      console.log(res);
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
    return await fetch('/register', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    })
  },

  /**
   * Log user out
   */
  logout: async () => {
    return await fetch('/logout')
    .then(res => res.json())
    .then(data => data);
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