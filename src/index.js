import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import store from './store'
import { Provider } from 'react-redux' 
// Browser 路由
import { HashRouter } from 'react-router-dom';

window.ajaxUrl = '//api.jfancymall.com';

// window.ajaxUrl = '//47.99.147.90:8000';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

