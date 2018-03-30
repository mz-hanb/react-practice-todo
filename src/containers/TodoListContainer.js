// import React from 'react';
import TodoList from '../components/TodoList';
import * as actions from '../actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  todos: state.todos
}); 

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch( actions.deleteTodo(id) ),
  onChangeState: (id, state) => dispatch( actions.complete(id, state) )
});

const TodoListContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;

