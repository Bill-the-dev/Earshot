import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// Testing
import { signup, login, logout } from './actions/session_actions';
import {fetchSongs, fetchSong} from './actions/song_actions'
import { fetchAlbum, fetchAlbums } from './actions/album_actions';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore()
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchSongs = fetchSongs; 
  window.fetchSong = fetchSong;
  window.fetchAlbums = fetchAlbums;
  window.fetchAlbum = fetchAlbum;

  // window.currentUser = currentUser;

});