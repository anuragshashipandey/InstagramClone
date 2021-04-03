import React,{ createContext, useEffect, useState} from 'react'

export const UsernameContext=createContext(); 

export function UsernameProvider(props) {
    const defaultuser=JSON.parse(window.localStorage.getItem(`UserName`))||'Anurag';
    const [username, setusername]=useState(defaultuser);
    const changeUsername=e=> setusername(e.target.value);
    useEffect(()=>{
        window.localStorage.setItem(`UserName`,JSON.stringify([username]))
    })
    return (
        <UsernameContext.Provider value={{ username,changeUsername }}>
            {props.children}
        </UsernameContext.Provider>
    )
}


