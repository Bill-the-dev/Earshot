import React from 'react';
import { connect } from 'react-redux';
import PlaylistShow from './playlist_show' 
import { createPlaylist, fetchPlaylist, fetchPlaylists } from '../../../../actions/playlist_actions';
import { fetchSongs } from '../../../../actions/song_actions';

const mSTP = (state) => {
  // debugger
  return {
    playlists: state.entities.playlists,
    songs: state.entities.songs,
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  // debugger
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    fetchSongs: () => dispatch(fetchSongs())
    // will need add and remove song
  };
};

export default connect(mSTP, mDTP)(PlaylistShow);