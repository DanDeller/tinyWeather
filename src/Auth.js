import * as actions from './redux/actions/isAuthenticated';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import app from './base.js';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    // app.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     user.getIdToken().then(idToken => {
    //       const expiresIn = new Date(new Date().getTime() + 60000);
    //       dispatch(actions.setTokenId(idToken));
    //       localStorage.setItem('token', idToken);
    //       localStorage.setItem('expirationDate', expiresIn);
    //     });
    //   }
    //   setCurrentUser(user);
    //   setPending(false);
    // });

    // axios.post('http://localhost:3001/auth/login', { email, password })
    //   .then((response) => {
    //     if (response.data.success) {
    //       this.setSession(response.data.token);
    //       resolve(response.data.data);
    //     } else {
    //       reject(response.data.error);
    //     }
    //   })
    //   .catch((error) => {
    //     reject(error);
    //   });

    setCurrentUser(null);
    setPending(false);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (currentUser) {
      dispatch(actions.setIsAuthenticated(true));
      dispatch(actions.setUserId(currentUser.uid));
    }
    // eslint-disable-next-line
  }, [currentUser]);

  if (pending) {
    return (
      <section className="container">
        <p className="tagline app-load">Loading app...</p>
      </section>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};