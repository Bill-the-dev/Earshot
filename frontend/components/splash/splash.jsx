import React from "react";
import { Link } from "react-router-dom";

import LogoGH from '../../../app/assets/images/github-square-brands.svg'
import LogoLI from '../../../app/assets/images/linkedin-brands.svg'
import LogoWhite from '../../../app/assets/images/ear-listen-solid-white.svg'
import SplashNav from "./splash_nav";

function openLink(url, newTab) {
  newTab
    ? window.open(url, "_blank", "noopener noreferrer")
    : (window.location.href = url);
}

// function handleDemo(e) {
//     e.preventDefault();
//     this.props.login({username: 'KindGuest', password: 'password'})
//     .then(() => this.props.history.push('/home'))
    
// }

const Splash = (props) => {
  
  const { currentUser, logout, loginDemo, login } = props
  // debugger
  return (
    <div className="splash-background">
      <div className="splash-container">
        <SplashNav login={login} logout={logout} currentUser={currentUser}/>
        <div className="splash-content">
          <p id="splash-content-left">Listening is</p>
          <p id="splash-content-right">everything</p>
          <p id="splash-content-center">Handfulls of songs. No credit card needed.</p>
          <div >
            <Link 
              to={ "/signup" }
              className="splash-get-btn"
              >CHECK IT OUT
            </Link>
               
          </div>
        </div>
        <footer className="splash-footer">
          <div className="splash-logo-container">
            <img src={LogoWhite} alt="logo-white" className='logo-white-splash'/>
            <h1>Earshot</h1>
          </div>
          <ul className="splash-nav">
            <li></li>
            <li></li>
            <li></li>
            <li className="disable">|</li>
            <li className="f-link">
              <div className="f-button" onClick={() => openLink("https://github.com/Bill-the-dev/Earshot", true)}>
                <img src={LogoGH} alt="logo-white" className='logo-white-GH'/>
              </div>
            </li>
            <li className="f-link">
              <div className="f-button" onClick={() => openLink("https://www.linkedin.com/in/bill-camarco/", true)}>
                <img src={LogoLI} alt="logo-white" className='logo-white-LI'/>
              </div>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default Splash;

