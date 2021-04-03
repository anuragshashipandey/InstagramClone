import React from 'react'
import Post from "./Post";

import { v4 as uuidv4 } from 'uuid';

export default function AppContent(props) {
    let defaultimg=[{                    
        id
        :
        53769
        ,imageSize
        :
        2740093
        ,largeImageURL
        :
        "https://pixabay.com/get/g7e859498c8ce1b5013c3fa47c9299b77aa38c3c8502bee50aa6978a2930d5bbd33fff8aa4e8154537ed03ccfbf0d40c7_1280.jpg"
        ,pageURL
        :
        "https://pixabay.com/photos/bridge-park-garden-japanese-garden-53769/"
        ,previewURL
        :
        "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_150.jpg"
        ,tags
        :
        "bridge, park, garden"
        ,user
        :
        "JamesDeMers"
        ,userImageURL
        :
        "https://cdn.pixabay.com/user/2016/09/24/15-21-58-529_250x250.jpg"
        ,user_id
        :
        3416
        ,webformatURL
        :
        "https://pixabay.com/get/g1f35fcd12571b9cf47d613a1bad6525fb099da8a59d71200de286912b510f186efd7b2ec33dd62f44f261980fbfeb6e1_640.jpg"

},{

        id
        :
        736877,
        largeImageURL
        :
        "https://pixabay.com/get/ge0d4a6be71e86badff05f8e2bfab45d5d1c662c88dd5d310966ebe8152ea54222f6d9ec0536c97ed1ee69da05bf4c2e08f4b20ceed711d184e00202a16975a02_1280.jpg",
        pageURL
        :
        "https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/"
        ,previewURL
        :
        "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg",
        tags
        :
        "tree, cat, silhouette"
        ,type
        :
        "photo"
        ,user
        :
        "Bessi"
        ,userImageURL
        :
        "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg"
        ,user_id
        :
        909086
    },{

        id
        :
        2785074,

        largeImageURL
        :
        "https://pixabay.com/get/g31a69f588a1d20d8eb3902a5f9b81549244c116e956937dcc5175bcf1d6ada799411681656d3d1941418a770539063c64280d3a23025c980be01a83b35fa1e32_1280.jpg"

        ,pageURL
        :
        "https://pixabay.com/photos/dog-sad-waiting-floor-sad-dog-pet-2785074/"

        ,previewURL
        :
        "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_150.jpg"
        ,tags
        :
        "dog, sad, waiting"
        ,type
        :
        "photo"
        ,user
        :
        "PicsbyFran"
        ,userImageURL
        :
        "https://cdn.pixabay.com/user/2020/05/08/15-39-26-890_250x250.jpg"
        ,user_id
        :
        6087762
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
