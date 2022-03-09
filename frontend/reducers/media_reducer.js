
import { FETCH_CURRENT_SONG, PLAY_SONG, PAUSE_SONG } from "../actions/media_actions";


// possible to load history, song queue, etc?
const preloadedState = {
  currentSong: null,
  playback: false,
  // duration: '0:00'
}

const MediaReducer = (oldState = preloadedState, action) => {
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState)

  switch (action.type) {
    case FETCH_CURRENT_SONG:
      newState.currentSong = action.song
      return newState;
    case PLAY_SONG:
      newState.playback = true
      return newState;
    case PAUSE_SONG:
      newState.playback = false
      return newState;
    default:
      return oldState;
  }

}

export default MediaReducer;