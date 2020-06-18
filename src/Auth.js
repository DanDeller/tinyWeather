import * as actions from './redux/actions/isAuthenticated';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import app from './base.js';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      dispatch(actions.setIsAuthenticated(true));
    }
  }, [currentUser]);

  if (pending){
    return <section className="container"><p className="tagline">Loading...</p></section>
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