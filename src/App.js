import React from "react";
import NavBar from "./Components/NavBar.js";
import UserProfile from  "./Components/UserProfile"
import Posts from "./Components/Posts"
import Contacts from "./Components/Contacts.js"
import "./index.css";


function App(){
  return(
    <div className="App">
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  )
}
export default App;
