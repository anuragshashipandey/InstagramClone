import React from 'react'
import Post from "./Post";
import {Redirect} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function AppContent(props) {
    let defaultimg=[{   
        id:"1234578",                 
        largeImageURL
        :
        "https://pixabay.com/get/g821477526b9767f124ae34b8f94b5771f2586dfc20248d28003b2e253b9bcbd84b8470f7c15b36f2132e1e19477d72457fbf48ce7a2a20972d8e2c6728dd4429_1280.jpg"
        ,tags
        :
        "books, apple, fruits"
        ,user
        :
        "JamesDeMers"
        ,userImageURL
        :
        "https://cdn.pixabay.com/user/2016/09/24/15-21-58-529_250x250.jpg"
}]

    let a=[uuidv4(),uuidv4(),uuidv4()];
   
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
// {(props.images.length===0)?
//     <div>
   
//     <Post key={a[0]} imgdetail={defaultimg[0]} />
//     <Post key={a[1]} imgdetail={defaultimg[0]} />
//     <Post key={a[2]} imgdetail={defaultimg[0]} />
//     </div>:console.log(`props lengh${props.images.length}`)
// }
