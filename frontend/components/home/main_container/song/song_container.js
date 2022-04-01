import { connect } from 'react-redux';
import Song from './song';
import { playSong, pauseSong, fetchCurrentSong, fetchDuration, fetchCurrentTime, receiveQueue } from '../../../../actions/media_actions'

const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentSong: state.entities.media.currentSong,
    playback: state.entities.media.playback,
    currentTime: state.entities.media.currentTime
  }
}

const mDTP = (dispatch) => {
  return {
    fetchCurrentSong: (song) => dispatch(fetchCurrentSong(song)),
    fetchDuration: () => dispatch(fetchDuration()),
    fetchCurrentTime: () => dispatch(fetchCurrentTime()),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    receiveQueue: (songs) => dispatch(receiveQueue(songs))
  }
}


export default connect(mSTP, mDTP)(Song)