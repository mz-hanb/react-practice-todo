// todo item
import React from "react";
import PropTypes from "prop-types";

import styles from './Todo.scss'; 
import classnames from 'classnames/bind'; 
const cx = classnames.bind( styles );

const Todo = ({ id, desc, completed, onDelete, onChangeState }) => {  
  return (
    <li className={cx('todo', {done: completed} )}>
      <input
        type="checkbox"
        onChange={ e => onChangeState(id, e.target.checked)}
      />
      <span>{desc}</span>
      <button onClick={e => onDelete(id)}>X</button>
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.string,
  desc: PropTypes.string,
  completed: PropTypes.bool,
  onDelete: PropTypes.func,
  onChangeState: PropTypes.func
};

Todo.defaultProps = {
  id: "",
  desc: "",
  completed: false,
  onDelete: () => console.warn("onDelete not defined"),
  onChangeState: () => console.warn("onChangeState not defined")
};

export default Todo;
