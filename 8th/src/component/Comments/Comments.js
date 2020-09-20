import React from 'react';
import './Comment.css';

const Comments = (props) => {
    const {name, body, email} = props.comment;
    
                     
    return (
        <div class="header">
            <h3>Name : {name}</h3>
            <h4>Email : {email}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Comments;