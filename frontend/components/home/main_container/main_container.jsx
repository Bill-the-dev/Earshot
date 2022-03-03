import React from "react";
import MainHeader from "./main_header_container";
import MainLibraryMix from "./main_library_mix";
import MainSuggestions from "./main_suggestions";

const MainContainer = () => {
  return (
    <div className="main-container">
      <MainHeader />
      <div className="main-content">
        <div className="m-greeting">Hello there</div>
        <MainLibraryMix />
        <MainSuggestions />
      </div>
    </div>
  )
}

export default MainContainer;