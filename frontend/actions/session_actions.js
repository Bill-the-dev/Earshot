import * as sessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

// Check error reporting with this format
export const login = user => dispatch => {
  return (
    sessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)))
  )
}

export const logout = () => dispatch => {
  return(
    sessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveErrors(errors)))
  )
}

export const signup = user => dispatch => {
  return(
    sessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)))
  )
}