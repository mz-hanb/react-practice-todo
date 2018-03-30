import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoListContainer from './containers/TodoListContainer';

import { connect } from 'react-redux'; 
import * as actions from './actions';

import classNames from 'classnames/bind';
import styles from './App.scss';
const cx = classNames.bind(styles);

class App extends Component {
  // status: active, complete, delete

  render() {    
    const { onCreate } = this.props;
    
    return (
      <div className={cx('app')}>          
        <h1>todos</h1>
        <AddTodo onCreate={onCreate} />           
        <TodoListContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  desc: state.desc
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: ( desc ) => dispatch( actions.create( desc ) )

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
