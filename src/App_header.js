import React,{ useState } from "react"
import logo from './images/logo.png';
import SimpleModal from "./SimpleModal";
import "./style/App_header.css"
import Avatar from '@material-ui/core/Avatar';
import {useHistory} from 'react-router-dom';


export default function Appheader(props) {

  const [search, setsearch]=useState('');
  const history=useHistory();
  
  return (
    <div className="App_header">
      
        <img className="app_logo" src={logo}  alt="logo" />

        <form className="search_bar" value="" onChange={e=>{
            setsearch(e.target.value);
            }}
            onSubmit={ e =>{
              e.preventDefault();
              props.getImage(search);
              history.push("/home/search");
              e.target.reset();
            }}
        >
            
            <input type='Text' placeholder='Search' />
        </form>

        <div style={{display:"flex",paddingLeft:"5px"}}>
            <SimpleModal />
            <Avatar 
            className='CommentAvatar' alt="profilepic" 
            src='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />
        </div>
          
    </div>
  );
}



