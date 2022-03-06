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
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';
import MediaPlayer3 from './home/media_footer/media_player_container';

const App = () => (
  <div className='app-container'>
    <header>
        {/* <h1>Earshot</h1> */}
        {/* <GreetingContainer /> */}
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer}/>
      <Route exact path="/login" component={LogInFormContainer} /> 
      <Route exact path="/signup" component={SignUpFormContainer} /> 
      <AuthRoute exact path="/home" component={HomeContainer} />
      <Route exact path="/mediaplayer3" component={MediaPlayer3}/>
      
      {/* <AuthRoute exact path="/login" component={LogInFormContainer} /> 
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
      <AuthRoute exact path="/home" component={HomeContainer} /> */}
      
    </Switch>
  </div>
);

export default App;