
import { 
  FETCH_CURRENT_SONG, 
  FETCH_DURATION, 
  PLAY_SONG, 
  PAUSE_SONG,
  NEXT_SONG, 
  FETCH_CURRENT_TIME, 
  RECEIVE_QUEUE 
} from "../actions/media_actions";

const preloadedState = {
  currentSong: null,
  playback: false,
  queue: [],
  duration: null,
  durationShow: '0:00',
  currentTime: null,
  currentTimeShow: '0:00'
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const formatSecs = secs < 10 ? `0${secs}` : `${secs}`;
  return `${mins}:${formatSecs}`;
}

const MediaReducer = (oldState = preloadedState, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  const audioEl = document.getElementsByClassName("audio-element")[0];
  switch (action.type) {
    case FETCH_CURRENT_SONG:
      newState.currentSong = action.song;
      return newState;
    case FETCH_DURATION:
      if (!newState.currentSong) {
        return newState.duration = null;
      } else {
        newState.durationShow = formatTime(audioEl.duration)
        newState.duration = audioEl.duration;
        return newState;
      }
    case FETCH_CURRENT_TIME: 
      if (!newState.currentSong) {
        return newState.currentTime = null;
      } else {
        newState.currentTimeShow = formatTime(audioEl.currentTime);
        newState.currentTime = audioEl.currentTime;
        return newState;
      }
    // QUEUE SENT AS PROPS TO SONG OBJECT, CONTEXTUAL
    case RECEIVE_QUEUE:
      const songs = Object.values(action.songs);
      songs.forEach(song => {
        if (!newState.queue.includes(song)) {
          newState.queue.push(song);
        }
      });
      return newState
    case PLAY_SONG:
      newState.playback = true;
      return newState;
    case PAUSE_SONG:
      newState.playback = false;
      return newState;
    case NEXT_SONG:
      newState.queue.unshift(action.song);
      return newState;      
    default:
      return oldState;
  }
};

export default MediaReducer;


