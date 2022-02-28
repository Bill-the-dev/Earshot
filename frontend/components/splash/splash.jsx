import React from "react";
import { Link } from "react-router-dom";


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
            <i class="fa-solid fa-ear-listen fa-xl"></i>
            <h1>Earshot</h1>
          </div>
          <ul className="splash-nav">
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
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
            <i class="fa-solid fa-ear-listen fa-xl"></i>
            <h1>Earshot</h1>
          </div>
          <ul className="splash-nav">
            <li></li>
            <li></li>
            <li></li>
            <li className="disable">|</li>
            <li>
              <button onClick={() => openLink("https://github.com/Bill-the-dev/Earshot", true)}>
                <i class="fa-brands fa-github fa-xl"></i>
              </button>
            </li>
            <li>
              <button onClick={() => openLink("https://www.linkedin.com/in/bill-camarco/", true)}>
                <i class="fa-brands fa-linkedin fa-xl"></i>
              </button>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default Splash;