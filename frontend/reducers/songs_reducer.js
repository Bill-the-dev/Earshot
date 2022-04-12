import { RECEIVE_SONG, RECEIVE_SONGS } from "../actions/song_actions"; 

const SongsReducer = (oldState = {}, action) => {
  // 
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;
    case RECEIVE_SONGS:
      return action.songs;
  
    default:
      return oldState
  }
}

export default SongsReducer;