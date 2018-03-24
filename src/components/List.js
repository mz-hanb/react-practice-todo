/**
 * todo list
 */
import React from 'react';

import styles from './List.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind( styles ); 

const Item = ({ todo, ehCheckedBox }) => {
  return(
    <li className={cx('list-item')}>
      <input type="checkbox" onChange={ (e) => ehCheckedBox(e, todo.id )} />
      <span className={cx('list-item-text', {complete: todo.status === 'complete' ? true : false })}>{todo.text}</span>
      <button>del</button>    
    </li>     
  );
}

const List = ({ todos, ehCheckedBox }) => {
  const list = todos.map( todo =>
    <Item
      todo={todo}
      ehCheckedBox={ehCheckedBox}
      key={todo.id}
    />
  );
  return(    
    <ul className={cx('list')} >
      {list}
    </ul>
  );
}

export default List;