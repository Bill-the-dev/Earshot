import { connect } from 'react-redux';
import { Route, Switch, NavLink, Link, withRouter } from 'react-router-dom';
import { fetchPlaylist, fetchPlaylists, createPlaylist } from '../../../actions/playlist_actions';
import LeftMenuBar from '../left_menu_bar/left_menu_bar'

const mSTP = (state, ownProps) => {
  // 
  return {
    playlists: state.entities.playlists,
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  // 
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  };
};

export default withRouter(connect(mSTP, mDTP)(LeftMenuBar));