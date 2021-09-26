import React from 'react';

const Side = (props) => {
    const {cart} = props
    console.log(cart)
    const total = cart?.reduce((previous, product) => previous + parseInt(product?.price), 0)

    return (
        <div style={{border: '3px solid indianred', padding:'20px 30px', borderRadius:'10px', position: 'fixed'}}>
            <h5>Food Added: {cart.length}</h5>
            <h6>Total: {total}</h6>
            <hr />
            <h6>Added Meal</h6>
            <ul>{cart.map((meal,i)=><li key={i}>{meal.strMeal}</li>
            )}</ul>
        </div>
    );
};
export default Side;