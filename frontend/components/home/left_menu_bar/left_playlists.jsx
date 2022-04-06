import React from 'react';
import { Route, Switch, NavLink, Link, withRouter } from 'react-router-dom';


class LeftMenuPlaylists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlaylists: [],
      currentPlaylist: ''
    };
  }

  componentDidMount() {
    this.props.fetchPlaylists()
      .then(() => {
        const userPlaylists = [];
        const currentUserId = this.props.currentUser.id;
        Object.values(this.props.playlists).forEach((playlist) => {
          if (playlist.creator_id === currentUserId) {
            userPlaylists.push(playlist);
          }
        });

        this.setState({
          currentPlaylists: userPlaylists
          // currentPlaylists: Object.values(this.props.playlists)
        });
      });
  }

  render() {
    const { playlists, currentUser } = this.props;
    if (!playlists || !currentUser || !this.state.currentPlaylists) return null;

    return (
      <div className="playlists">
        <ul className="pl-list">
          {this.state.currentPlaylists.map((userPlaylist) => <li className='pl-item' key={userPlaylist.id}>{userPlaylist.title}</li>
          )}
          <li className="pl-item">Playlist 1</li>
          <li className="pl-item">Playlist 2</li>
          <li className="pl-item">Playlist 3</li>
          <li className="pl-item">Playlist 4</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(LeftMenuPlaylists);