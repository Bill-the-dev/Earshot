import { connect } from "react-redux";
import { logout, loginDemo, login } from "../../actions/session_actions";
import Splash from "./splash";

const mSTP = (state) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    loginDemo: () => dispatch(loginDemo()),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mSTP, mDTP)(Splash);