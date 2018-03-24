/**
 * todo 입력창
 */

import React from 'react'; 
import styles from './AddTodo.scss';
import classnames from 'classnames/bind'; 
const cx = classnames.bind( styles );

const AddTodo = ( { initText, ehChangeInput, ehAddClick } ) => {

  return(    
    <div className={cx('add-todo')}>
      <input type="text" value={initText} onChange={ehChangeInput} />
      <button onClick={ehAddClick}>add todo</button>
    </div>
  )
}

export default AddTodo;