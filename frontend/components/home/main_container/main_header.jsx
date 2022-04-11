import React from "react"
import { useState } from "react";
// import MainHeaderContainer from "./main_header_container"


// MainContainer > MainHeader
const MainHeader = ({currentUser, logout}) => {
  let user;
  if (!currentUser) {
    return null;
  } 
  // else {
  //   // let user = document.getElementsByClassName('dropdown')[0];
  //   // user.innerHTML = currentUser.username
  // }
  

  const [isActive, setIsActive] = useState(false)
  // debugger
  return (
    <div className="main-header">
      <div className="mh-nav"></div>
      <div className="mh-username">

        <div className="dropdown" onClick={e => setIsActive(!isActive)}>{currentUser.username}
          <div className="dropdown-button"> 
            
            {/* {currentUser.name} */}
            <span className="down-carrot"></span>
          </div>
          {isActive && (
            <div className="dropdown-content">
              <div className="dropdown-item" value="logout" onClick={logout}>
                Log out 
              </div>
            </div>
          )}
        </div> 




        
        {/* <h3>{currentUser.username}</h3> */}
      </div>
    </div>
  )
}

export default MainHeader

    

