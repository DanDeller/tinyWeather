import * as actions from '../../redux/actions/currentWeather';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import './Modal.scss';

const ErrorModal = ({visible, closeModal, dispatch}) => {
  closeModal = (e) => {
    e.preventDefault();
    dispatch(actions.visible(false));
    dispatch(actions.setCity(''));
    dispatch(actions.fetchWeatherSuccess());
  };

  return (
    <div>
      <Modal
        visible={visible}
        width="400"
        height="300"
        effect="fadeInUp"
      >
        <div className="modal">
          <h2>We either cannot find that city, the city was spelled incorrectly, or you forgot to enter a city first.</h2>
          <a href="/" onClick={closeModal}>Try Again?</a>
        </div>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    visible: state.currentWeather.visible
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

ErrorModal.propTypes = {
  closeModal: PropTypes.func,
  visible: PropTypes.bool
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ErrorModal);