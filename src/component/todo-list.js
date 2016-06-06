import React from 'react';
import { connect } from 'react-redux';

let TodoList = ({list}) => {
  let liItems = list.map((val, index) => {
    return (<li key={index}>{val}</li>);
  });
  return (
      <ul>{liItems}</ul>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.Todos
  };
};

TodoList = connect(mapStateToProps, null)(TodoList);
export default TodoList;
