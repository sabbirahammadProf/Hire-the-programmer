import React, { useEffect, useState } from 'react';
import './Programmers.css';
import Programmer from '../Programmer/Programmer';
import Cart from '../Cart/Cart';


const Programmers = () => {

    // Create states
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);

    // Set API data
    useEffect( () => {
        fetch('https://raw.githubusercontent.com/sabbirahammadProf/data/main/fakedata.JSON')
        .then(res => res.json())
        .then(data => setProgrammers(data))
    }, []);

    // Add to cart function
    const addToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }

    return (
        <div className="container">
            <div className="grid">
                {/* Pass the API data to programmer component */}
                {
                    programmers.map((programmer)=> <Programmer key={programmer.id} programmer={programmer} addToCart={addToCart}/>)
                }
            </div>
            <div>
                {/* Pass data to cart component */}
                <Cart addToCart={cart}></Cart>
            </div>
        </div>
    );
};

export default Programmers;