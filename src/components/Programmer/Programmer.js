import React from 'react';
import './Programmer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Programmer = (props) => {

    // Destructure the props data
    const {image, id, name, cost, years_of_experience, phone} = props.programmer;
    return (
        <div>
        <div className="card">
            <div className="card-head">

                {/* Programmer image */}
                
                <img src={image} alt="" />
            </div>
            <div>

                {/* Programmer info */}

                <p>Serial: {id}</p>
                <h2>{name}</h2>
                <p>Cost: ${cost}</p>
                <p>Years of experience: {years_of_experience}</p>
                <p>Phone: {phone}</p>
                <div className="icon">
                <FontAwesomeIcon title="Call now" className="phone-icon" icon={faPhone} />
                </div>
                <button onClick={()=> props.addToCart(props.programmer)} className="add-btn">Add the programmer</button>
            </div>
        </div>
        </div>
    );
};

export default Programmer;