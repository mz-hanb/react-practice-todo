import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({todos, onDelete, onChangeState}) => {  
  const list = todos.map(
    (todo) =>
      <Todo key={todo.id} id={todo.id} desc={todo.desc} completed={todo.completed}
        onDelete={onDelete}
        onChangeState={onChangeState}
      />
  );
  return(
    <ul>
      {list}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string, 
    desc: PropTypes.string, 
    completed: PropTypes.bool
  })), 
  onDelete: PropTypes.func,
  onChangeState: PropTypes.func

}

TodoList.defaultProps = {
  todos: [],
  onDelete: () => console.warn('onDelete not defined'),
  onChangeState: () => console.warn('onChangeState not defined')
}
export default TodoList;