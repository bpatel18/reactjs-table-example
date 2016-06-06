import React from 'react';

import { connect } from 'react-redux';

let TestComp = ({ testClick, testClick2, sayHi, sayHello }) => {
  let inpNodeHi, inputNodeHello;
  return (
    <div>
      <input type="text" ref={(node) => { inpNodeHi = node; }}/>
      <input type="text" ref={(node) => { inputNodeHello = node; }}/>
      <button onClick={() => { testClick(inpNodeHi.value); }}>Hi</button>
      <button onClick={() => { testClick2(inputNodeHello.value); }}>Hello</button>
      <div>{'Hi ' + sayHi}</div>
      <div>{'Hello '+ sayHello}</div>
      </div>);
};

const mapStateToProps = (state) => {
  return {
    sayHi: state.sayHi,
    sayHello: state.sayHello
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testClick: (value) => {
      dispatch({type: "SAY_HI", value });
    },
    testClick2: (value) => {
      dispatch({type: "SAY_HELLO", value });
    }
  };
};

TestComp = connect(mapStateToProps, mapDispatchToProps)(TestComp);
export default TestComp;
