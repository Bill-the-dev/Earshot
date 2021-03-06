import * as APIUtil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => {
  
  return (
    APIUtil.signup(user)
    .then(
      user => (dispatch(receiveCurrentUser(user))), 
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    )
)}

export const login = user => dispatch => (
  APIUtil.login(user)
  .then(
    user => (dispatch(receiveCurrentUser(user))), 
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  )
);

export const logout = () => dispatch => {
  // 
  return (
    APIUtil.logout()
    .then(() => (dispatch(logoutCurrentUser())))
  );
}

export const loginDemo = () => dispatch => {
  const user = {username: 'KindGuest', password: 'password'};
  return(
    APIUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    )
  )
}
