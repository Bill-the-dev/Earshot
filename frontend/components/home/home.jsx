import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";

import LeftMenuBar from "./left_menu_bar/left_menu_bar_container";
import MainPage from "./main_container/main_page_container";
import MediaFooter from "./media_footer/media_footer_container";
import AlbumShow from "./main_container/album/album_container";
import ArtistShow from "./main_container/artist/artist_container";
import MainHeader from "./main_container/main_header_container";
import PlaylistShow from "./main_container/playlist/playlist_show_container";
import SearchShow from "./main_container/search/search_show_container";



function openLink(url, newTab) {
  newTab
    ? window.open(url, "_blank", "noopener noreferrer")
    : (window.location.href = url);
}


class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  
  render() {
    const userId = this.props.currentUser.id

    return (
      <div className="home-container">
        <LeftMenuBar />
        <MainHeader />
        <Switch >
          <AuthRoute path={`/home/search`} component={SearchShow}/>
          <AuthRoute path={`/home/playlists/u${userId}/:id`} component={PlaylistShow} />
          <AuthRoute path='/home/albums/:albumId' component={AlbumShow} />
          <AuthRoute path='/home/artists/:artistId' component={ArtistShow} />
          <AuthRoute path='/home' component={MainPage} />
        </Switch>
        <MediaFooter />
      </div>
    );
  }
};


export default Home;