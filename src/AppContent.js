import React from 'react'
import Post from "./Post";

import { v4 as uuidv4 } from 'uuid';

export default function AppContent(props) {   
    return (
        <div className='AppContent' style={
           {
                marginLeft:'20%',
                marginRight:'20%',
           }
        }>
        {  
            props.images.map( img=>(   
               <Post key={uuidv4()} imgdetail={img} />))
        }
                
        </div>
    )
}

