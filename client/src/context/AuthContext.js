import React, {createContext,useState,useEffect} from 'react';
import * as actions from '../redux/actions/isAuthenticated';
import AuthService from '../services/AuthService';
import { useDispatch } from 'react-redux';

export const AuthContext = createContext();

export default ({ children }) => {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [isLoaded,setIsLoaded] = useState(false);
  const [user,setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    AuthService.isAuthenticated().then((data) => {

      console.log(data);

      if (data !== undefined) {
        const expiresIn = new Date(new Date().getTime() + 60000);
        const { user, isAuthenticated, access_token } = data;
        const payload = {
          token: access_token,
          isAuthenticated: isAuthenticated,
          id: user.id
        };

        localStorage.setItem('tinyWeatherToken', access_token);
        localStorage.setItem('expirationDate', expiresIn);

        dispatch(actions.setAuth(payload));
        
        setUser(user);
        setIsAuthenticated(isAuthenticated);
        setIsLoaded(true);
      }

      
    });
  }, [dispatch]);

  return (
    <div>
      {!isLoaded ? 
      <p className="tagline app-load">Loading app...</p> : 
      <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
        { children }
      </AuthContext.Provider>}
    </div>
  )
};