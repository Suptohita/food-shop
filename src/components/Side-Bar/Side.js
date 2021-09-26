import React from 'react';

const Side = (props) => {
    const {cart} = props
    const total = cart.reduce((previous, product) => previous + parseInt(product.price), 0)
    return (
        <div style={{border: '3px solid indianred', padding:'20px 30px', borderRadius:'10px', position: 'fixed'}}>
            <h5>Food Added: {cart.length}</h5>
            <h6>Total: {total}</h6>

        </div>
    );
};

export default Side;