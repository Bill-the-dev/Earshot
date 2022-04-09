import React from 'react';
import { Route, Switch, NavLink, Link, withRouter } from 'react-router-dom';


class LeftMenuPlaylists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlaylists: [],
      currentPlaylist: ''
    };
    this.updateUserPlaylists = this.updateUserPlaylists.bind(this)
  }

  componentDidMount() {
    // debugger
    this.props.fetchPlaylists()
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.playlists !== this.props.playlists) {
      // debugger
      this.updateUserPlaylists()
      // const userPlaylists = [];
      // const currentUserId = this.props.currentUser?.id;
      // const creatorId = (playlist.creator.id) ? playlist.creator.id : playlist.creatorId
      // // creatorId is being passed in differently on create Playlist, data mismatch? Potential issue, temporary solution with turnery
      // Object.values(this.props.playlists).forEach((playlist) => {
      //   debugger
      //   if (creatorId === currentUserId) {
      //     userPlaylists.push(playlist)
      //   } 
      // });
      // this.setState({
      //   currentPlaylists: userPlaylists
      // })
    }
  }

  updateUserPlaylists() {
    const userPlaylists = [];
    const currentUserId = this.props.currentUser.id;
    // creatorId is being passed in differently on create Playlist, data mismatch? Potential issue, temporary solution with turnery
    Object.values(this.props.playlists).forEach((playlist) => {
      // debugger
      // const creatorId = (!playlist.creator.id) ? playlist.creatorId : playlist.creator.id 
      const creatorId = playlist.creator.id
      // debugger;
      if (creatorId === currentUserId) {
        userPlaylists.push(playlist);
      }
    });
    this.setState({
      currentPlaylists: userPlaylists
    })
  }


  render() {
    const { playlists, currentUser } = this.props;
    if (!playlists || !currentUser || !this.state.currentPlaylists) return null;
    // debugger
    return (
      <div className="left-playlists-container">
        <ul className="pl-list">
          {this.state.currentPlaylists.map((userPlaylist, index) => {
            // debugger
            return(
              <Link to={`/home/playlists/u${currentUser.id}/${userPlaylist.id }`} className='pl-item-link'>
                <li className='pl-item' key={`${index}${userPlaylist.id}`}>{userPlaylist.title}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(LeftMenuPlaylists);