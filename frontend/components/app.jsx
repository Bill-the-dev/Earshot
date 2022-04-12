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
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';
import AlbumContainer from './home/main_container/album/album_container';
import Modal from './modal/modal';

const App = () => (
  <div className='app-container'>
    <header></header>
    <Modal />
    <Switch>
      <Route exact path="/login" component={LogInFormContainer} /> 
      <Route exact path="/signup" component={SignUpFormContainer} /> 
      <Route exact path="/" component={SplashContainer}/>
      <ProtectedRoute path="/home" component={HomeContainer} />      
    </Switch>
  </div>
);

export default App;