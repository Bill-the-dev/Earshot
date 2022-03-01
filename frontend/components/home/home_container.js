import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Home from "./home";

const mSTP = (state) => {
  return {
    // currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  return {
    // logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(Home);



  /* 
    Left Bar Nav
      - Main Nav
          (large buttons)
        + logo
        + Home
        + Search
        + Your Library
          (small buttons)
        + Create Playlist
        + Liked Songs
        + Your Episodes

      Playlist List 
      - UL of LIs (scrolls)
    Main Container
      - Header (account and < > )
      - Main Scrolling
        - Greeting 
        - Library Mix and Greeting (3x2) (scrolls)
        - Suggestions Mix (5x1) (scrolls)
    Media Footer
      - Now playing
      - Media Player 
      - Media Controls 
    */