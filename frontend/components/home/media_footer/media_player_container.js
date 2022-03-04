import { connect } from "react-redux";
import MediaPlayer from "./media_player";
import { fetchSong, fetchSongs } from "../../../actions/song_actions";

// ownProps?
// const mSTP = (state, ownProps) => {
//   debugger
//   return ({
//     // song: state.songs[ownProps.match.params.songId]
//     song: null
//   })
// }

const mDTP = (dispatch) => {
  // debugger
  return ({
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchSongs: () => dispatch(fetchSongs())
  })
}

export default connect(mSTP, mDTP)(MediaPlayer)