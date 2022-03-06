import React from "react";
import { connect } from "react-redux";
import MediaFooter from "./media_footer";
import { fetchSong, fetchSongs } from "../../../actions/song_actions";



const mSTP = state => {
  // debugger
  return ( {
    currentSong: state.entities.songs[1]
    // place holder:
    // when song is clicked, fetch song, pass into mediaplayer as prop. 
  })
}

const mDTP = (dispatch) => {
  // debugger
  return ({
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchSongs: () => dispatch(fetchSongs())
  })
}

export default connect(mSTP, mDTP)(MediaFooter)