import React,{ useState, useContext, useEffect } from 'react'
import "./style/Post.css"
import Avatar from '@material-ui/core/Avatar';
import { UsernameContext } from './UsernameContext';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';


function Post(props) {
    let keypost=props.imgdetail.id;
    const commenthistory = JSON.parse(window.localStorage.getItem(`comment${keypost}`))||[];
    const { username }=useContext(UsernameContext);
    const [commenttyped, setcommenttyped] = useState('');
    const [comment, setcomment] = useState(commenthistory);

    useEffect(()=>{
        console.log('ineffects');
        window.localStorage.setItem(`comment${keypost}`,JSON.stringify([...comment]))
        console.log(commenthistory)
        console.log(props.imgdetail.id)
    },[comment])

console.log('return se pehle')
    return (
        <div className='Post'>
            <div className='Post_header'>    
                <Avatar alt={props.imgdetail.user} src={props.imgdetail.userImageURL} />
                <h4>{props.imgdetail.user}</h4>
            </div>
                <img src={props.imgdetail.largeImageURL}
                    alt={props.imgdetail.user} />
                <p key={uuidv4()}>
                    <b>{props.imgdetail.user}</b>
                    {props.imgdetail.tags}
                </p>
                    {comment!==[]?comment.map(ct=>(
                        <p key={ct.id}>
                            <b key={ct.id}>{ct.user}</b>
                            {ct.comnt}
                        </p>
                    )):''}
                <div className='PostComment'>
                    <Avatar className='CommentAvatar' alt={username} src='./avatar/anurag.jpg'/>
                    <form onSubmit={e=>{
                        e.preventDefault();
                        setcomment([...comment,{key:uuidv4(), user:username,comnt:commenttyped}])
                    }}
                     noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Write a Comment" 
                        onChange={e=>(setcommenttyped(e.target.value))}
                        
                        />
                    </form>
                </div>
        </div>
    )
}

export default Post
