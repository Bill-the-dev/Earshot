import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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


export default withRouter(connect(mSTP, mDTP)(MainHeader));