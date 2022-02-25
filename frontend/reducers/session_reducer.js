import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

const _nullSession = Object.freeze({
  id: null
})

const sessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return newState.id = action.currentUser.id;
    case LOGOUT_CURRENT_USER:
      return newState;
    default:
      return oldState;
  }
}

export default sessionReducer;