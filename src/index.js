import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux 관련 불러오기
import { createStore } from 'redux'; 
import reducers from './reducers';
import { Provider } from 'react-redux';
// store 생성
const store = createStore( reducers );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
