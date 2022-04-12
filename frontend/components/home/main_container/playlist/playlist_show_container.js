import React from 'react';
import { connect } from 'react-redux';
import PlaylistShow from './playlist_show' 
import { createPlaylist, deletePlaylist, fetchPlaylist, fetchPlaylists } from '../../../../actions/playlist_actions';
import { fetchSongs } from '../../../../actions/song_actions';
import { openModal } from '../../../../actions/modal_actions';

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
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    fetchSongs: () => dispatch(fetchSongs()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mSTP, mDTP)(PlaylistShow);