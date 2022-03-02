import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  // debugger
  return (
    <Route 
      path={path} 
      exact={exact}
      render={props => {
        if (loggedIn) {
          return <Component {...props} />
        } else  {
          return <Redirect to="/" />
        }

      }}
     />
  );
}

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.id)}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));




const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
  path={path} 
  exact={exact} 
  render={(props) => ( loggedIn ? (
    <Component {...props} />
    ) : (
      <Redirect to="/login" />
      )
      )} />
      );
      
      export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
      // moved below mSTP for screenshots