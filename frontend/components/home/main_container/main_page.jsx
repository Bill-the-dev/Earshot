import React from "react";
import MainHeader from "./main_header_container";
import MainLibraryMix from "./main_library_mix";
import MainSuggestions from "./main_suggestions";

const MainPage = () => {
  // debugger
  return (
    <div className="main-page">
      <MainHeader />
      <div className="main-content">
        <div className="m-greeting">Hello there</div>
        <MainLibraryMix />
        <MainSuggestions />
      </div>
    </div>
  )
}

export default MainPage;