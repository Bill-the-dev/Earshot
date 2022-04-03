import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducers';
import mediaReducer from './media_reducer';
import playlistsReducer from './playlists_reducer';

const entitiesReducer = combineReducers({ 
  users: usersReducer,
  songs: songsReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playlistsReducer,
  media: mediaReducer
})

export default entitiesReducer;