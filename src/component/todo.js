import React from 'react';
import { connect } from 'react-redux';

let Todo = ({ todoClick }) => {
  let inpNode;
  return (
    <div>
      <input type="text" ref={(node) => { inpNode = node; }}/>
      <button onClick = {() => { todoClick(inpNode.value); }}>Add</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    todoClick: (value) => {
      dispatch({type: "TODO_LIST", value:value});
    }
  };
};

Todo = connect(null, mapDispatchToProps)(Todo);
export default Todo;
