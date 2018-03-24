import React, { Component } from 'react';
import TodoAppContainer from './containers/TodoAppContainer';
import classNames from 'classnames/bind';
import styles from './App.scss';

const cx = classNames.bind(styles);

class App extends Component {
  // status: active, complete, delete

  state = {
    inputText: '',
    list: [
      {id: '1', text: 'todo', status: 'active'},
      {id: '2', text: 'todo', status: 'active'},
      {id: '3', text: 'todo', status: 'active'},
      {id: '4', text: 'todo', status: 'active'}
    ]
  }

  ehAddClick = (e) => {
    // console.log( e.type );
    let todoObj = { id: new Date().toISOString(), text: this.state.inputText, status: 'active' };
    let nextTodos = this.state.list.concat();
    nextTodos.push( todoObj );

    this.setState({
      inputText: '',
      list: nextTodos
    })    
  }

  ehChangeInput = (e) => {
    this.setState({
      inputText: e.target.value
    });    
  }

  ehCheckedBox = (e, id) => {   
    const currentChecked = e.target.checked;    
    this._changeStatus( id, currentChecked === true ? 'complete' : 'active');  
    // console.log( currentTodo );
  }

  _changeStatus = (id, stStatus) => { 
    const {list} = this.state;   
    const tgIdx = list.findIndex( (obj) => obj.id === id );
    const tgObj = list[tgIdx];
    const nextList = [...list];  // this.state.list.concat();
    nextList[tgIdx] = {
      ...tgObj,     
      status: stStatus
    }
    this.setState({
      list: nextList
    });  
  }



  render() {
    // console.log( this.state );
    const { inputText, list } = this.state;
    const { ehChangeInput, ehAddClick, ehCheckedBox } = this;
    return (
      <div className={cx('app')}>             
        <TodoAppContainer
          inputText={inputText}
          list={list}
          ehCheckedBox={ehCheckedBox}
          ehChangeInput={ehChangeInput}
          ehAddClick={ehAddClick}
        />        
      </div>
    );
  }
}

export default App;
