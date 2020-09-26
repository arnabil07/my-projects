import React, { useState } from 'react';
import FakeData from '../../fakeData/FakeData';
import './Home.css';
import Place from '../Place/Place';
import { useHistory } from 'react-router-dom';

const Home = () => { 
    const fakeData = FakeData;
    const [placeId, setPlaceId] = useState(1);
    const [title, setTitle] = useState('Cox’s bazar');
    const [description, setDescription] = useState('fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and Khyang monastery it ...');
    let redirectDetail = useHistory();


    const handleChange = (id, title, shortDescription) => {
        setPlaceId(id);
        setTitle(title);
        setDescription(shortDescription);
        
    }

    let history = useHistory();

    const btnHandleClick = () => {
        history.push(`/bookingDetail/${placeId}`);
    }

    return (
        <main>
             <div className="d-flex ">
                <div className="left-side mt-5">
                    <h1 className="title">{title}</h1>
                    <p className="booking-font">{description}</p>
                    <button  className="btn booking-btn mt-3 btn-warning" onClick={btnHandleClick}>Booking →<span className="fas fa-arrow-right"></span></button>
                </div>
                <div className="right-side mt-5 ml-2">
                    {
                        fakeData.map(place => <Place  key={place.id} place={place} handleChange={handleChange} />)
                    }
                </div>
            </div>
        </main>
    );
};

export default Home;