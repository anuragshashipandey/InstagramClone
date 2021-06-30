import React,{useState} from 'react'
import Appheader from "./App_header"
import Notfound from "./Components/Notfound"
import './style/App.css';
import axios from 'axios';
import {useHistory,Switch,Route} from 'react-router-dom';
import { UsernameProvider } from "./UsernameContext";
import AppContent from './AppContent';
import Homepage from './Homepage';
import err404 from './images/monster404.png';


function App() {
  let history=useHistory();
  let apiUrl='https://pixabay.com/api';
  let key='20980574-3a62997a7bb7b00144c046ad2';
  const [apii, setapii]=useState({
    images:[]
  });
  let getImage= (searchh) => {
    axios.get(`${apiUrl}/?key=${key}&q=${searchh}&Image_type=photo`)
    .then(res=>{
      if(res.data.total===0)        
          history.push('/not_found');
      else 
        setapii({images:res.data.hits})
      console.log(res);
    })
    .catch(err=>console.log(err))
    
  }
 
  return (

    <div>
  <UsernameProvider>
  
      <Appheader getImage={getImage}/>
      <Switch>
      <Route exact path='/home/search' render={()=><AppContent images={apii.images.slice(0,10)} />} />
      <Route exact path='/not_found' render={()=><Notfound/>}/>
      <Route exact path='/'render={()=><Homepage/>}/>
      <Route render={()=><div  className='err404'><img data-testid='err404'  alt='404 Not Found' src={err404}/></div>} />
      </Switch>
    </UsernameProvider>
  </div>

  );
}

export default App;



// <AppContent images={apii.images.slice(0,10)} />

// <Switch>
// <Route path='/' render(()=><AppContent images={apii.images.slice(0,10)} />) /> 
// </Switch>