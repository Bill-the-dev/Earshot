import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducers';
import mediaReducer from './media_reducer';

const entitiesReducer = combineReducers({ 
  users: usersReducer,
  songs: songsReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  media: mediaReducer
})

export default entitiesReducer;