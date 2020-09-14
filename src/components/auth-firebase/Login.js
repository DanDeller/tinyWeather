import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../../Auth.js';
// import app from '../../base.js';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        // await app
        //   .auth()
        //   .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
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