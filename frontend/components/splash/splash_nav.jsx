import React from 'react'
import { Link } from 'react-router-dom'
// import { logout, loginDemo, login } from "../../actions/session_actions";
import LogoWhite from '../../../app/assets/images/ear-listen-solid-white.svg'


export default class SplashNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleDemo = this.handleDemo.bind(this);
  }
  
  openLink(url, newTab) {
    newTab
      ? window.open(url, "_blank", "noopener noreferrer")
      : (window.location.href = url);
  }
  
  handleDemo(e) {
    e.preventDefault();
    this.props.login({
      username: 'KindGuest', 
      password: 'password'
    })
    .then(() => this.props.history.push('/home'))
    
  }
  
  render() {
    const { currentUser, logout, loginDemo, login } = this.props
    return (
      <div className="splash-header">
          <div className="splash-logo-container">
            <img src={LogoWhite} alt="logo-white" className='logo-white-splash'/>
            <h1>Earshot</h1>
          </div>
          <ul className="splash-nav">
            <li onClick={this.handleDemo}>Explore as Guest</li>
            <li onClick={logout}>Log Out</li>
            <li className="disable">|</li>
            <li>
              <Link to={ "/signup" } className="link-to">Sign Up</Link>
            </li>
            <li><Link to={ "/login" } className="link-to">Log In</Link></li>
          </ul>
        </div>
    )
  }
}
