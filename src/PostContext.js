import React,{ createContext, useState} from 'react'

export const PostContext=createContext(); 

export function PostProvider(props) {
    const [postname, setpostname]=useState('Palestaial');
    const changepostname=e=> setpostname(e.target.value);
    return (
        <PostContext.Provider value={{ postname,changepostname }}>
            {props.children}
        </PostContext.Provider>
    )
}


