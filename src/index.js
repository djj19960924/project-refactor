import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import store from './store'
import { Provider } from 'react-redux' 
// Browser 路由
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

