import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Home from "./home";

const mSTP = (state) => {
  debugger
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(Home);


