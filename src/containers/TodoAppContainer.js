import React, { Component } from "react";
import { AddTodo, List } from '../components';

import styles from './TodoAppContainer.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


class TodoAppContainer extends Component {
  
  render() {
    const {inputText, list, ehCheckedBox, ehChangeInput, ehAddClick} = this.props;
    return (
      <div className={cx('todoApp')} list={list} onKeyDown={ (e) => { e.keyCode.toString() === '13' ? ehAddClick() : console.log('false');  } }>
        <h1>To do App</h1>          
        <AddTodo initText={inputText} ehChangeInput={ehChangeInput} ehAddClick={ehAddClick}  />
        <List todos={list} ehCheckedBox={ehCheckedBox} />
      </div>
    );
  }
}

export default TodoAppContainer;
