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
    // 
    this.props.fetchPlaylists()
  }

  componentDidUpdate(prevProps) {
    
    if (prevProps.playlists !== this.props.playlists) {
      // 
      this.updateUserPlaylists()
      // const userPlaylists = [];
      // const currentUserId = this.props.currentUser?.id;
      // const creatorId = (playlist.creator.id) ? playlist.creator.id : playlist.creatorId
      // // creatorId is being passed in differently on create Playlist, data mismatch? Potential issue, temporary solution with turnery
      // Object.values(this.props.playlists).forEach((playlist) => {
      //   
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
    let userLikedSongs = null;
    const userPlaylists = [];
    const currentUserId = this.props.currentUser.id;

    Object.values(this.props.playlists).forEach((playlist) => {
      const creatorId = playlist.creator.id

      if (creatorId === currentUserId && playlist.title !== 'Liked Songs') {
        userPlaylists.push(playlist);
      } 
    });
    this.setState({
      currentPlaylists: userPlaylists
    })
    // if (!userPlaylists.includes('Liked Songs')) {
    //   this.props.createPlaylist({
    //     title: `Liked Songs`,
    //     creator_id: currentUserId
    //   })
    //     .then((playlist) => { 
    //       userPlaylists.push(playlist) 
    //       // this.setState({
    //       //   currentPlaylists: userPlaylists, 
    //       // })
    //     })
    // } else {
    //   this.setState({
    //     currentPlaylists: userPlaylists
    //   })

    // }
  }



  render() {
    const { playlists, currentUser } = this.props;
    if (!playlists || !currentUser || !this.state.currentPlaylists) return null;
    // 
    return (
      <div className="left-playlists-container">
        <ul className="pl-list">
          {this.state.currentPlaylists.map((userPlaylist, index) => {
            // 
            return(
              <Link to={`/home/playlists/u${currentUser.id}/${userPlaylist.id}`} className='pl-item-link' key={`${index}${userPlaylist.id}`}>
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