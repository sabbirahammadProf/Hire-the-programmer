import React from 'react';
import './Programmer.css';

const Programmer = (props) => {
    const {image, id, name, cost, years_of_experience, phone} = props.programmer;
    return (
        <div className="card">
            <div className="card-head">
                <img src={image} alt="" />
            </div>
            <div>
                <p>Serial: {id}</p>
                <h2>{name}</h2>
                <p>Cost: ${cost}</p>
                <p>Years of experience: {years_of_experience}</p>
                <p>Phone: {phone}</p>
                <button className="add-btn">Add the programmer</button>
            </div>
        </div>
    );
};

export default Programmer;