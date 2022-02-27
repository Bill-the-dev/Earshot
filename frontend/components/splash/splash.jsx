import React from "react";
import { Link } from "react-router-dom";

const Splash = ({ currentUser, logout }) => {

  return (
    <div className="splash-background">
      <div className="splash-container">
        <div className="splash-header">
          <h1>Earshot</h1>
          <ul className="splash-nav">
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li>|</li>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
        </div>
        <div className="splash-content">
          <h1>Listening is</h1>
          <h1>everything</h1>
          <h2>Handfulls of songs. No credit card needed.</h2>
          <div className="splash-get-btn">
            <input 
              type="button"
              value="GET EARSHOT FREE"
              /> 
          </div>
        </div>
        <div className="splash-footer"></div>

      </div>

    </div>
  )
}

export default Splash;