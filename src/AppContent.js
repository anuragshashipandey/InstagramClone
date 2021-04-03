import React from 'react'
import Post from "./Post";

import { v4 as uuidv4 } from 'uuid';

export default function AppContent(props) {
    let defaultimg={
                    key:0,
                    tags: "blossom, bloom, flower",
                    largeImageURL
                    :
                    "https://pixabay.com/get/g62decff16d82f27f9a3a9bc829ece29c2b265d344fa88cd39c220185aa35119fd86319cc110b5f36bd45fde65b5fff0b44c9f430339d91a27c06b3b8564a94a0_1280.jpg"
                    ,likes
                    :
                    53
                    ,previewURL
                    :
                    "https://cdn.pixabay.com/photo/2021/03/30/16/40/beach-6137344_150.jpg"
                    ,user
                    :
                    "enriquelopezgarre"
                    ,userImageURL
                    :
                    "https://cdn.pixabay.com/user/2021/03/08/19-47-06-54_250x250.jpg"
                    
                    ,webformatURL
                    :
                    "https://pixabay.com/get/geb43ae7725eed50c3e9cdca05646e1c2281a5c3f1da737d1e5bc04de9b95aec36c93b36c4231e3fdd62b51c6703fb0719dd7f81891a740b006c41358f02f18fb_640.jpg"
    }

    let a=[uuidv4(),uuidv4(),uuidv4()];
   
    return (
        <div className='AppContent' style={
           {
                marginLeft:'20%',
                marginRight:'20%',
           }
        }>
            {props.images.map( img=>(   
               <Post key={uuidv4()} imgdetail={img} />
            ))}
                {(props.images.length==='0')?console.log("image passed"):
                    <div>
                    
                    <Post key={a[0]} imgdetail={defaultimg} />
                    <Post key={a[1]} imgdetail={defaultimg} />
                    <Post key={a[2]} imgdetail={defaultimg} />
                    </div>
                }
                
        </div>
    )
}
