import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to Our Food Shop</h1>
            <h4>Here you can find many difference food from many region</h4>
            <h5 className='available-food'>Available Meal: 20</h5>
        </div>
    );
};

export default Header;