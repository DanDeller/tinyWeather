import React from 'react';
import style from '../../assets/styles/style.less';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';

const ErrorModal = (props) => {
  return (
    <div>
      <Modal
        visible={props.visible}
        width="400"
        height="300"
        effect="fadeInUp"
      >
        <div className={style.modal}>
          <h2>We either cannot find that city or you forgot to enter a city first.</h2>
          <a href="#" onClick={props.closeModal}>Search Again?</a>
        </div>
      </Modal>
    </div>
  )
}

ErrorModal.propTypes = {
  closeModal: PropTypes.func,
  visible: PropTypes.bool
};

export default ErrorModal;