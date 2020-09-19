import axios from 'axios';

export default {
  login: async user => {
    const userData = user;
    try {
      await axios.post('/login', userData)
      .then(res => res.json())
      .then(data => {
        const currentUser = data;
        console.log(currentUser);
      });
    } catch(error) {
      console.log(error);
    }
  },

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