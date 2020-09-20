import React, { useState, useEffect } from 'react';
import Buddy from '../Buddy/Buddy';


const Home = () => {
    const [buddys, setBuddys] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setBuddys(data))
    }, [])

    return (
        <div>
            {
                buddys.map(buddy =><Buddy buddy={buddy}></Buddy>)
            }

        </div>
    );
};

export default Home;