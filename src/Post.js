import React,{ useContext } from 'react'
import "./style/Post.css"
import Avatar from '@material-ui/core/Avatar';
import { UsernameContext } from './UsernameContext';




function Post(props) {
    const { username }=useContext(UsernameContext);

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
                <div className='PostComment'>
                    <Avatar className='CommentAvatar' alt={username} src='./avatar/anurag.jpg'/>
                    <h5><b>{username}</b></h5>
                </div>
        </div>
    )
}

export default Post
