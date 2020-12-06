import { AuthContext } from '../context/AuthContext';
import React, { useContext, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route {...rest} render={props => {
      if (!isAuthenticated) {
        return <Redirect to={{ pathname: '/about', state: { from: props.location }} }/>
      } else {
        return <Suspense fallback={<></>}><Component {...props}/></Suspense>
      };
    }}/>
  );
};

export default PrivateRoute;