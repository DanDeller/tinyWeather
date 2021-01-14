import { AuthContext } from '../context/AuthContext';
import { Route, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';

const PrivateRoute = ({component: Component, ...rest}) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route {...rest} render={props => {
      if (!isAuthenticated) {
        return <Redirect to={{ pathname: '/home', state: { from: props.location }} }/>
      } else {
        return <Component {...props}/>
      };
    }}/>
  );
};

export default PrivateRoute;