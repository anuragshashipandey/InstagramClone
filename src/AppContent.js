import React from 'react'
import Post from "./Post";

import { v4 as uuidv4 } from 'uuid';

export default function AppContent(props) {
    let defaultimg=[{                    
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
},{
        largeImageURL
        :
        "https://pixabay.com/get/ge0d4a6be71e86badff05f8e2bfab45d5d1c662c88dd5d310966ebe8152ea54222f6d9ec0536c97ed1ee69da05bf4c2e08f4b20ceed711d184e00202a16975a02_1280.jpg",
        tags
        :
        "tree, cat, silhouette"
        ,user
        :
        "Bessi"
        ,userImageURL
        :
        "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg"
    },{
        largeImageURL
        :
        "https://pixabay.com/get/g31a69f588a1d20d8eb3902a5f9b81549244c116e956937dcc5175bcf1d6ada799411681656d3d1941418a770539063c64280d3a23025c980be01a83b35fa1e32_1280.jpg"
        ,tags
        :
        "dog, sad, waiting"
        ,user
        :
        "PicsbyFran"
        ,userImageURL
        :
        "https://cdn.pixabay.com/user/2020/05/08/15-39-26-890_250x250.jpg"
     }]

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
                    
                    <Post key={a[0]} imgdetail={defaultimg[0]} />
                    <Post key={a[1]} imgdetail={defaultimg[1]} />
                    <Post key={a[2]} imgdetail={defaultimg[2]} />
                    </div>
                }
                
        </div>
    )
}
