import React from 'react';
import { useHistory } from 'react-router-dom';
import './Place.css'

const Place = (props) => {
    const { id, title, url, shortDescription } = props.place;
    let history = useHistory();

    const handleClick = () => {
        history.push(`/bookingDetail/${id}`);
    }



    return (
        <div className="item"  onMouseEnter={() => props.handleChange  (id, title, shortDescription)} onClick={handleClick}>
            <div className="div-img" style={{ backgroundImage: `url(${url})` }}>
                <h5 className="single-title">{title}</h5>
            </div>
        </div>
    );
};

export default Place;