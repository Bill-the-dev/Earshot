import React from "react"
import MainHeaderContainer from "./main_header_container"


// MainContainer > MainHeader
const MainHeader = ({currentUser, logout}) => {
  // debugger
  return (
    <div className="main-header">
      <div className="mh-nav"></div>
      <div className="mh-username">
        <h3>{currentUser.username}</h3>
      </div>
    </div>
  )
}

export default MainHeader

