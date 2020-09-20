import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
    
    const Buddy = (props) => {
        const { title, id } = props.buddy;
            const buddyStyles = {
                    border: '2px solid #67e6dc',
                    marginTop: '40px',
                    marginLeft: '150px',
                    marginRight: '150px',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backgroundColor: '#81ecec'
                    }
      return (
            <div style={buddyStyles} >
                <h2>{id}</h2>
                <h3>{title}</h3>
                <Link to={`/post/${id}`}>
                <Button variant="contained" color="secondary">
                   Read More
                </Button>
                </Link>

            </div>
        );
    };
    
    export default Buddy;