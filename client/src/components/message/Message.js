import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import React from 'react';
import './Message.scss';

const getStyle = ({ message }) => {
  let baseClass = 'alert pulsate ';

  if (message.msgError) {
    baseClass = `${baseClass} alert-danger`;
  } else {
    baseClass = `${baseClass} alert-primary`;
  };

  return baseClass;
};

const Message = (props) => {
  return (
    <CSSTransitionGroup
      transitionName="list-item"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={true}
      transitionEnterTimeout={500}
      transitionLeave={true}
      transitionLeaveTimeout={300}>
      <div className={getStyle(props)} role="alert">
        { props.message.msgBody }
      </div>
    </CSSTransitionGroup>
  );
};

export default Message;