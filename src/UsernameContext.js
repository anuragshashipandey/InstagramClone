import React,{ createContext, useState} from 'react'

export const UsernameContext=createContext(); 

export function UsernameProvider(props) {
    const [username, setusername]=useState('Anurag');
    const changeUsername=e=> setusername(e.target.value);
    return (
        <UsernameContext.Provider value={{ username,changeUsername }}>
            {props.children}
        </UsernameContext.Provider>
    )
}


