import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/AuthService';

export const AuthContext = createContext();

export default ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AuthService.isAuthenticated().then((data) => {
      const { user, isAuthenticated } = data;
        setIsAuthenticated(isAuthenticated);
        setIsLoaded(true);
        setUser(user);
    });
  }, []);

  return (
    <div>
      {!isLoaded ? <p className="tagline app-load">Loading app...</p> : 
      <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
        { children }
      </AuthContext.Provider>}
    </div>
  )
};