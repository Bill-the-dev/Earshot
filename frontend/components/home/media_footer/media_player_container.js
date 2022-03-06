import React from "react";
import { connect } from "react-redux";
import MediaPlayer3 from "./media_player3";
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

export default connect(mSTP, mDTP)(MediaPlayer3)