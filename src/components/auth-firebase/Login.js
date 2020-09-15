import * as authActions from '../../redux/actions/isAuthenticated';
import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../../Auth.js';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      const data = {
        username: email.value,
        password: password.value
      };
  
      try {
        axios.post('/login', data)
        .then((res) => {
          console.log(res);
          dispatch(authActions.setUserData(res));
        })
        .catch((err) => console.log(err));
  
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  // Right now this will fail and will NOT navigate to
  // the login view
  if (currentUser === null) {
    return <Redirect to="/" />;
  };

  return (
    <div>
      <div className="login">
        <h2>Log in</h2>
        <form onSubmit={handleLogin}>
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);