import React from "react";
import { connect } from "react-redux";
import MediaFooter from "./media_footer";
import { playSong, pauseSong, fetchCurrentSong, fetchDuration, fetchCurrentTime } from "../../../actions/media_actions";
import { fetchSong, fetchSongs } from "../../../actions/song_actions";
import { withRouter } from "react-router-dom";




const mSTP = state => {
  // debugger
  // let AlbId = state.entities.media.currentSong.albumId
  // currentSong: Object.asssign(state.entities.media.currentSong, { albumUrl: state.entities.albums[AlbId].albumArtUrl })
  return ( {
    currentSong: state.entities.media.currentSong,
    //currentAlbum: st ent albums[albId] (then later call albArt)
    playback: state.entities.media.playback,
    duration: state.entities.media.duration,
    durationShow: state.entities.media.durationShow,
    currentTime: state.entities.media.currentTime,
    currentTimeShow: state.entities.media.currentTimeShow,
    queue: state.entities.media.queue
  })
}

const mDTP = (dispatch) => {
  // debugger
  return ({
    fetchCurrentSong: (song) => dispatch(fetchCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    fetchDuration: () => dispatch(fetchDuration()),
    fetchCurrentTime: () => dispatch(fetchCurrentTime())
    // fetchSong: (songId) => dispatch(fetchSong(songId)),
    // fetchSongs: () => dispatch(fetchSongs())
  })
}

export default withRouter(connect(mSTP, mDTP)(MediaFooter))