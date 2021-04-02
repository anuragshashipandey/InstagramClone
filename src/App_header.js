import React from "react"
import logo from './images/insta_logo.png';
import "./style/App_header.css" 

export default function Appheader() {
  return (
    <div className="App_header">
      <header className="App_header">
        <img className="app_logo" src={logo}  alt="logo" />
        <form className="search_bar">
            <input type='Text'></input>
        </form>
      </header>
    </div>
  );
}
