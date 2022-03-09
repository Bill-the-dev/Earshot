import React from "react";
import { connect } from "react-redux";
import MediaFooter from "./media_footer";
import { playSong, pauseSong, fetchCurrentSong, fetchDuration } from "../../../actions/media_actions";
import { fetchSong, fetchSongs } from "../../../actions/song_actions";



const mSTP = state => {
  // debugger
  return ( {
    currentSong: state.entities.media.currentSong,
    playback: state.entities.media.playback,
    duration: state.entities.media.duration,
    durationShow: state.entities.media.durationShow
    // when song is clicked, fetch song, pass into mediaplayer as prop. 
  })
}

const mDTP = (dispatch) => {
  // debugger
  return ({
    fetchCurrentSong: (song) => dispatch(fetchCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    fetchDuration: () => dispatch(fetchDuration())
    // fetchSong: (songId) => dispatch(fetchSong(songId)),
    // fetchSongs: () => dispatch(fetchSongs())
  })
}

export default connect(mSTP, mDTP)(MediaFooter)