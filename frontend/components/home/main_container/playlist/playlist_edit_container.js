import { connect } from "react-redux";
import { closeModal } from "../../../../actions/modal_actions";
import { fetchPlaylists, editPlaylist } from "../../../../actions/playlist_actions";
import PlaylistEdit from './playlist_edit'

const mSTP = (state) => {
  
  // let playlistId = parseInt(this.props.location.pathname.slice(19))

  return {
    playlists: state.entities.playlists, 
    songs: state.entities.songs,
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  // 
  return {
    editPlaylist: (playlist) => dispatch(editPlaylist(playlist)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    fetchSongs: () => dispatch(fetchSongs()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(PlaylistEdit);