import React from 'react';
import { connect } from 'react-redux';
import CreatePlaylistForm from './create_playlist_form' 
import { createPlaylist, fetchPlaylist, fetchPlaylists } from '../../../../actions/playlist_actions';

const mSTP = (state) => {
  // debugger
  return {
    playlists: state.entities.playlists,
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  // debugger
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    // will need add and remove song
  };
};

export default connect(mSTP, mDTP)(CreatePlaylistForm);