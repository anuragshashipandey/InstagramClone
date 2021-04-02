import React,{ useContext } from 'react'
import "./style/Post.css"
import Avatar from '@material-ui/core/Avatar';
import { UsernameContext } from './UsernameContext';
import { PostContext } from './PostContext';



function Post(props) {
    const { username }=useContext(UsernameContext);
    const { postname }= useContext(PostContext);
    return (
        <div className='Post'>
            <div className='Post_header'>    
                <Avatar alt={postname} src='./avatar/anurag.jpg'/>
                <h4>{postname}</h4>
            </div>
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
                    alt='username_img' />
                <p>
                    <b>Anonymouse</b>
                     this is a cat pic
                    </p>
                <div className='PostComment'>
                    <Avatar className='CommentAvatar' alt={username} src='./avatar/anurag.jpg'/>
                    <h5><b>{username}</b></h5>
                </div>
        </div>
    )
}

export default Post
