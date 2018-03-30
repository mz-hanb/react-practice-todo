import React from 'react';
import styles from './AddTodo.scss';
import classnames from 'classnames/bind'; 
const cx = classnames.bind( styles );

const AddTodo = ( { onCreate } ) => {
  let stCurrent = '';  
  return(      
    <div className={cx('add-todo')} onKeyDown={
      (e) => {
        if( e.keyCode === 13 ){
          onCreate( stCurrent );          
        } 
      }
    }>
      <input type="text" onChange={
        (e) => {
          stCurrent = e.target.value;          
        }
      }/>
      <button onClick={ (e) => onCreate( stCurrent ) } >add todo</button>
    </div>
  )
}

export default AddTodo;