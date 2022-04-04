import React from 'react';
import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylist, fetchPlaylists } from '../../../../actions/playlist_actions';

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
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(PlaylistIndex));