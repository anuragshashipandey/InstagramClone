import React,{ useState } from "react"
import logo from './images/insta_logo.png';
import "./style/App_header.css"


export default function Appheader(props) {

  const [search, setsearch]=useState('');

  
  return (
    <div className="App_header">
      
        <img className="app_logo" src={logo}  alt="logo" />
        <form className="search_bar" onChange={e=>{
          setsearch(e.target.value);
          }}
          onSubmit={ e =>{
            e.preventDefault();
            props.getImage(search)
          }}
        >
            <input type='Text' placeholder='Search' />
        </form>
      
    </div>
  );
}
