import { RECEIVE_SONG, RECEIVE_SONGS } from "../actions/song_actions"; 

const SongsReducer = (oldState = {}, action) => {
  debugger
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_SONG:
      return Object.assign({}, oldState, {[action.type.id]: action.type})
    case RECEIVE_SONGS:
      return action.songs
  
    default:
      return oldState
  }
}

export default SongsReducer;