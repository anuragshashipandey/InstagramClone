import React,{useState} from 'react'
import Appheader from "./App_header"
import './App.css';
import axios from 'axios'

import { UsernameProvider } from "./UsernameContext";
import { PostProvider } from "./PostContext";
import AppContent from './AppContent';


function App() {
  let apiUrl='https://pixabay.com/api';
  let key='20980574-3a62997a7bb7b00144c046ad2';
  const [search, setsearch]=useState('');
  const [apii, setapii]=useState({
    images:[]
  });
  let getImage= (e) => {
    e.preventDefault();
    
    axios.get(`${apiUrl}/?key=${key}&q=${search}&Image_type=photo`)
    .then(res=>{
      setapii({images:res.data.hits})
    })
    .catch(err=>console.log(err))

    setsearch('');
  }
  return (
  <UsernameProvider>
    <PostProvider>
      <Appheader getImage={getImage}/>
      <AppContent images={apii.images.slice(0,10)} />
    </PostProvider>
  </UsernameProvider>

  );
}

export default App;
//background-color: #fafafa;