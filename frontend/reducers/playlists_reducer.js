import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS } from "../actions/playlist_actions";

const PlaylistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_PLAYLIST:
      newState[action.playlist.id] = action.playlist;
      console.log(action.playlist)
      return newState;

    case RECEIVE_PLAYLISTS:
      return action.playlists      
  
    default:
      return oldState;
  }
}

export default PlaylistsReducer