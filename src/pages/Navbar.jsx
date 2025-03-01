import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Zomato
                </Link>
                <div className="menu-icon" onClick={handleMenuToggle}>
                    <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={handleMenuToggle}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/restaurants" className="nav-links" onClick={handleMenuToggle}>
                            Restaurants
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={handleMenuToggle}>
                            About
                        </Link>
                    </li>
                    {isAuthenticated ? (
                        <>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-links" onClick={handleMenuToggle}>
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-links" onClick={onLogout}>
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-links" onClick={handleMenuToggle}>
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-links" onClick={handleMenuToggle}>
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;