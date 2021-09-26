import React from 'react';
import './Header.css';
import Cart from '../Cart/Cart';

const Header = () => {
    return (
        <div>
            <header>
                {/* Navbar */}
                <nav>
                    <div className="nav-container">
                        <div>
                            <a href="#" target="_blank">Hire programmers</a>
                        </div>
                        <div>
                            <Cart></Cart>
                        </div>
                    </div>
                </nav>
                {/* About site */}
                <div className="hero-area">
                    <h2>Choose the programmers</h2>
                    <h1>Budget: 10 Million</h1>
                </div>
            </header>
        </div>
    );
};

export default Header;