import React from "react";
import { Link } from "react-router-dom";
import LogoGH from '../../../app/assets/images/github-square-brands.svg'
import LogoLI from '../../../app/assets/images/linkedin-brands.svg'
import LogoWhite from '../../../app/assets/images/ear-listen-solid-white.svg'

function openLink(url, newTab) {
  newTab
    ? window.open(url, "_blank", "noopener noreferrer")
    : (window.location.href = url);
}

const Splash = ({ currentUser, logout }) => {
  return (
    <div className="splash-background">
      <div className="splash-container">
        <div className="splash-header">
          <div className="splash-logo-container">
            <img src={LogoWhite} alt="logo-white" className='logo-white'/>
            <h1>Earshot</h1>
          </div>
          <ul className="splash-nav">
            <li>Explore as Guest</li>
            <li className="disable">|</li>
            <li>
              <Link to={ "/signup" } className="link-to">Sign Up</Link>
            </li>
            <li><Link to={ "/login" } className="link-to">Log In</Link></li>
          </ul>
        </div>
        <div className="splash-content">
          <p id="splash-content-left">Listening is</p>
          <p id="splash-content-right">everything</p>
          <p id="splash-content-center">Handfulls of songs. No credit card needed.</p>
          <div >
            <input 
              type="button"
              value="GET EARSHOT FREE"
              className="splash-get-btn"
              /> 
          </div>
        </div>
        <footer className="splash-footer">
          <div className="splash-logo-container">
            <img src={LogoWhite} alt="logo-white" className='logo-white'/>
            <h1>Earshot</h1>
          </div>
          <ul className="splash-nav">
            <li></li>
            <li></li>
            <li></li>
            <li className="disable">|</li>
            <li className="f-link">
              <div className="f-button" onClick={() => openLink("https://github.com/Bill-the-dev/Earshot", true)}>
                <img src={LogoGH} alt="logo-white" className='logo-white'/>
              </div>
            </li>
            <li className="f-link">
              <div className="f-button" onClick={() => openLink("https://www.linkedin.com/in/bill-camarco/", true)}>
                <img src={LogoLI} alt="logo-white" className='logo-white'/>
              </div>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default Splash;

// <li className="f-links">
//   <img src={LogoLI} alt="logo-white" className='logo-white'/>
// </li>
// <li className="f-link">
//   <img src={LogoGH} alt="logo-white" className='logo-white'/>
// </li>