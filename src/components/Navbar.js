import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            {/* Navigation links */}
            <Link to="/">Home</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/location">Location</Link>
            <Link to="/registration">Registration</Link>
        </nav>
    );
};

export default Navbar;
