import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])

   
    useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setComments(data));
    }, [])
    console.log(comments)
    const buddyStyles = {
        border: '1px solid black',
        marginTop: '40px',
        marginLeft: '200px',
        marginRight: '200px',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: 'lightblue'
        }
        const commentStyle = {
            backgroundColor: 'lightgray',
            marginLeft: '200px',
            marginRight: '200px',
            padding: '40px'
        }
    return (
        <div>
            <div style={buddyStyles} >
            <h2>{postId}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/home`}>
                <Button variant="contained" color="primary">
                  Back to home
                </Button>
                </Link>
        </div>
        <div style={commentStyle}>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
        </div>
    );
};

export default PostDetails;