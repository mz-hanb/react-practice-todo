import React, { Component } from 'react';
import TodoAppContainer from './containers/TodoAppContainer';

class App extends Component {
  render() {
    return (
      <div className="App">      
      <TodoAppContainer />        
      </div>
    );
  }
}

export default App;
