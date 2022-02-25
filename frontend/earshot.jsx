import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';
// import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<h1>EARShot</h1>);

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch; 

});