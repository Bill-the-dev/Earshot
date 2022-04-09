import * as PlaylistUtil from '../util/playlist_util'

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';

// Action Creators
const receivePlaylist = (playlist) => {
  return ({
    type: RECEIVE_PLAYLIST,
    playlist
  });
};

const receivePlaylists = (playlists) => {
  return ({
    type: RECEIVE_PLAYLISTS,
    playlists
  });
};

// Thunks
export const fetchPlaylist = id => dispatch => {
  return (
    PlaylistUtil.fetchPlaylist(id)
      .then(playlist => dispatch(receivePlaylist(playlist)))
  );
};

export const fetchPlaylists = () => dispatch => {
  return (
    PlaylistUtil.fetchPlaylists()
      .then(playlists => dispatch(receivePlaylists(playlists)))
  );
};

export const createPlaylist = (playlist) => dispatch => {
  return (
    PlaylistUtil.createPlaylist(playlist)
      .then(playlist => dispatch(receivePlaylist(playlist)))
  )
}

export const deletePlaylist = (id) => dispatch => {
  return (
    PlaylistUtil.deletePlaylist(id)
  )
}

// delete playlist?
// update playlist?
// remove playlist song

export const addPlaylistSong = (playlistId, songId) => dispatch => {
  return (
    PlaylistUtil.addPlaylistSong(playlistId, songId)
      .then(playlist => dispatch(receivePlaylist(playlist)))
  )
}