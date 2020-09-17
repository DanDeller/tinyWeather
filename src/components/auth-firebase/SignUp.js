import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

const SignUp = ({history}) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const data = {
      username: email.value,
      password: password.value
    };

    try {
      await axios.post('/register', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

      history.push('/');
    } catch(error) {
      console.log(error);
    }
  }, [history]);

  return (
    <div className="signup">
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);