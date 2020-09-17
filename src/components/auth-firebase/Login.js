import * as actions from '../../redux/actions/isAuthenticated';
import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
// import { AuthContext } from '../../Auth.js';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const data = {
      username: email.value,
      password: password.value
    };

    try {
      await axios.post('/login', data)
      .then((res) => {
        const currentUser = res;
        console.log(currentUser);

        dispatch(actions.setIsAuthenticated(true));
        dispatch(actions.setUserId(currentUser._id));
      })
      .catch((err) => console.log(err));

      history.push('/');
    } catch(error) {
      console.log(error);
    }
  }
  
  // const handleLogin = useCallback(
  //   async event => {
  //     event.preventDefault();
  //     const { email, password } = event.target.elements;
  //     const data = {
  //       username: email.value,
  //       password: password.value
  //     };
  
  //     try {
  //       await axios.post('/login', data)
  //       .then((res) => {
  //         const currentUser = res;
  //         console.log(currentUser);

  //         dispatch(actions.setIsAuthenticated(true));
  //         dispatch(actions.setUserId(currentUser._id));
  //       })
  //       .catch((err) => console.log(err));
  
  //       history.push('/');
  //     } catch(error) {
  //       console.log(error);
  //     }

  //   },
  //   [history]
  // );

  // Right now this will fail and will NOT navigate to
  // the login view
  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/" />;
  // };
  
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