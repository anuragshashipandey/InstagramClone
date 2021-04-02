import React,{ useState,useContext  } from 'react'
import Post from "./Post";
import { UsernameContext } from './UsernameContext';

export default function AppContent() {
    const { username }=useContext(UsernameContext);
    return (
        <div className='AppContent'>
            <Post  picsrc='cat3'/>
            <Post picsrc='cat1'/>
            <Post picsrc='cat2'/>
        </div>
    )
}
