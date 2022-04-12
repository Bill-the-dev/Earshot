import { connect } from 'react-redux';
import { Route, Switch, NavLink, Link, withRouter } from 'react-router-dom';
import { fetchPlaylist, fetchPlaylists, createPlaylist, deletePlaylist } from '../../../actions/playlist_actions';
import LeftMenuPlaylists from './left_playlists';



const mSTP = (state, ownProps) => {
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
    fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id))
  };
};

export default withRouter(connect(mSTP, mDTP)(LeftMenuPlaylists));