import React,{ useState,useContext } from 'react'
import "./style/Post.css"
import Avatar from '@material-ui/core/Avatar';
import { UsernameContext } from './UsernameContext';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';


function Post(props) {
    const { username }=useContext(UsernameContext);
    const [commenttyped, setcommenttyped] = useState('');
    const [comment, setcomment] = useState([]);
    return (
        <div className='Post'>
            <div className='Post_header'>    
                <Avatar alt={props.imgdetail.user} src={props.imgdetail.userImageURL} />
                <h4>{props.imgdetail.user}</h4>
            </div>
                <img src={props.imgdetail.largeImageURL}
                    alt={props.imgdetail.user} />
                <p>
                    <b>{props.imgdetail.user}</b>
                    {props.imgdetail.tags}
                    </p>
                    {comment.map(ct=>(
                        <p key={ct.id}>
                            <b>{ct.user}</b>
                            {ct.comnt}
                        </p>
                    ))}
                <div className='PostComment'>
                    <Avatar className='CommentAvatar' alt={username} src='./avatar/anurag.jpg'/>
                    <form onSubmit={e=>{
                        e.preventDefault();
                        setcomment([...comment,{key:uuidv4(), user:username,comnt:commenttyped}])
                        console.log(comment);
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
