import { connect } from "react-redux";
import MediaPlayer from "./media_player";
import { fetchSong, fetchSongs } from "../../../actions/song_actions";

// ownProps?
const mSTP = (state) => {
  debugger
  return {
    // currentSong: state.song.
    currentSong: null
  }
}

const mDTP = (dispatch) => {
  debugger
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId))
  }
}

export default (mSTP, mDTP)(MediaPlayer)