import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions"
import MainHeader from "./main_header";

const mSTP = (state) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(mSTP, mDTP)(MainHeader);