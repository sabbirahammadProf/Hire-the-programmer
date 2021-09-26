import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = () => {
    return (
        <div>
            <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            <div className="cart">
                <FontAwesomeIcon className="close-icon" icon={faWindowClose} />
                <h3>Programmer added: 4</h3>
                <h3>Total Cost: $6666</h3>
                <hr />
                <h4>Added Programmers:-</h4>
                <ul>
                    <li>Nia Das</li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;