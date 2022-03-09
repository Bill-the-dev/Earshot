import { connect } from 'react-redux';
import Song from './song';
import { playSong, pauseSong, fetchCurrentSong, fetchDuration } from '../../../../actions/media_actions'

const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentSong: state.entities.media.currentSong,
    playback: state.entities.media.playback,
  }
}

const mDTP = (dispatch) => {
  return {
    fetchCurrentSong: (song) => dispatch(fetchCurrentSong(song)),
    fetchDuration: () => dispatch(fetchDuration()),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
  }
}


export default connect(mSTP, mDTP)(Song)