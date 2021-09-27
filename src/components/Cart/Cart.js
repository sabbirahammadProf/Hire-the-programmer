import React from 'react';
import './Cart.css';

const Cart = (props) => {
    
    // Destructure props data
    const {addToCart} = props;

    // Calculate total cost
    let totalCost = 0;
    for(const programmer of addToCart){
        totalCost += programmer.cost;
    }
    
    return (
        // Cart
        <div className='cart'>
            <h3>Programmers added: {addToCart.length}</h3>
            <h3>Cost: ${totalCost}</h3>
            <hr />
            <h4>Added programmers name:- </h4>
            <ul>
                {
                    addToCart.map((item)=> <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;