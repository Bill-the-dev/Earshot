import React from 'react'
import { connect } from 'react-redux'
import { fetchSongs } from "../../../../actions/song_actions";
import SearchShow from './search_show'


const mSTP = (state) => {
  // 
  return {
    playlists: state.entities.playlists,
    songs: state.entities.songs,
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  // 
  return {
    fetchSongs: () => dispatch(fetchSongs()),
  };
};

export default connect(mSTP, mDTP)(SearchShow);