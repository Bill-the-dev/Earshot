import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container'
import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div className='app-container'>
    <header>
        {/* <h1>Earshot</h1> */}
        {/* <GreetingContainer /> */}
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      
    </Switch>
  </div>
);

export default App;