import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
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
      axios.post('/register', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

      history.push('/');
    } catch (error) {
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

const matchStateToProps = state => {
  return {
    sidebarLoading: state.currentWeather.sidebarLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default (
  connect(
    matchStateToProps, 
    mapDispatchToProps
  ),
  withRouter(SignUp)
);