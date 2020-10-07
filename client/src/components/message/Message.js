import { useTransition, animated } from 'react-spring';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { X } from 'react-feather';
import './Message.scss';

let id = 0;

function Message({ config = { tension: 125, friction: 20, precision: 0.1 }, timeout = 500, children, message }) {
  const [cancelMap] = useState(() => new WeakMap());
  const [refMap] = useState(() => new WeakMap()); 
  const [items, setItems] = useState([]);

  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, height: 0, life: '100%' },
    enter: item => async next => await next({ opacity: 1, height: refMap.get(item).offsetHeight }),
    leave: item => async (next, cancel) => {
      cancelMap.set(item, cancel)
      await next({ life: '0%' })
      await next({ opacity: 0 })
      await next({ height: 0 })
    },
    onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
    config: (item, state) => (state === 'leave' ? [{ duration: timeout }, config, config] : config),
  });

  useEffect(() => void children(msg => setItems(state => [...state, { key: id++, msg }])), [children]);

  return (
    <Container>
      {transitions.map(({ key, item, props: { life, ...style } }) => (
        <Messages key={key} style={style}>
          <Content ref={ref => ref && refMap.set(item, ref)}>
            <Life style={{ right: life }} />
            <p>{ message.msgBody }</p>
            <Button
              onClick={e => {
                e.stopPropagation()
                cancelMap.has(item) && cancelMap.get(item)()
              }}>
              <X size={18} />
            </Button>
          </Content>
        </Messages>
      ))}
    </Container>
  );
};

const Container = styled('div')`
  position: fixed;
  z-index: 1000;
  width: 357px;
  top: ${props => (props.top ? '0' : 'unset')};
  bottom: ${props => (props.top ? '0' : '30px')};
  margin: -60px auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  flex-direction: ${props => (props.top ? 'column-reverse' : 'column')};
  pointer-events: none;
  @media (max-width: 680px) {
    align-items: center;
  }
`;

const Messages = styled(animated.div)`
  box-shadow: 0px 0px 10px -4px #000;
  box-sizing: border-box;
  height: 70px !important;
  position: relative;
  overflow: hidden;
  width: 40ch;
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const Content = styled('div')`
  color: white;
  background: #445159;
  opacity: 0.9;
  padding: 12px 22px;
  font-size: 1em;
  display: grid;
  grid-template-columns: ${props => (props.canClose === false ? '1fr' : '1fr auto')};
  grid-gap: 10px;
  overflow: hidden;
  height: auto;
  border-radius: 3px;
  //margin-top: ${props => (props.top ? '0' : '10px')};
  margin-bottom: ${props => (props.top ? '10px' : '0')};
`;

const Button = styled('button')`
  position: absolute;
  right: 4px;
  top: 5px;
  cursor: pointer;
  pointer-events: all;
  outline: 0;
  border: none;
  background: transparent;
  display: flex;
  align-self: flex-end;
  overflow: hidden;
  margin: 0;
  padding: 0;
  padding-bottom: 14px;
  color: rgba(255, 255, 255, 0.5);
  :hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Life = styled(animated.div)`
  position: absolute;
  bottom: ${props => (props.top ? '10px' : '0')};
  left: 0px;
  width: auto;
  background-image: linear-gradient(130deg, #F45050, #f5918e);
  height: 5px;
`;

export default Message;