import { AuthContext } from '../context/AuthContext';
import { Route, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;