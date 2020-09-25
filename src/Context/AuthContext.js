import React, {createContext,useState,useEffect} from 'react';
import * as actions from '../redux/actions/isAuthenticated';
import AuthService from '../Services/AuthService';
import { useDispatch } from 'react-redux';

export const AuthContext = createContext();

export default ({ children }) => {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [isLoaded,setIsLoaded] = useState(false);
  const [user,setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    AuthService.isAuthenticated().then((data) => {
      const expiresIn = new Date(new Date().getTime() + 60000);
      const { user, isAuthenticated } = data;
      
      if (user.username.length) {
        const { access_token } = user.cookies;

        localStorage.setItem('tinyWeatherToken', access_token);
        localStorage.setItem('expirationDate', expiresIn);

        dispatch(actions.setTokenId(access_token));
        dispatch(actions.setIsAuthenticated(true));
        dispatch(actions.setUserId(user.id));
        
        setUser(user);
        setIsAuthenticated(isAuthenticated);
        setIsLoaded(true);
      };

      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <div>
      {!isLoaded ? <p className="tagline app-load">Loading app...</p> : 
      <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
        { children }
      </AuthContext.Provider>}
    </div>
  )
};