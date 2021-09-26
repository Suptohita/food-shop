import React from 'react';

const Side = (props) => {
    const {cart} = props
    console.log(cart)
    const total = cart?.reduce((previous, product) => previous + parseInt(product?.price), 0)
    
    const sideStyle ={
    border: '3px solid indianred',
    padding:'20px 30px', 
    borderRadius:'10px', 
    position: 'fixed'
}


    return (
        <div style={sideStyle}>
            <h4>Added Meal</h4>
            <ul>{cart.map((meal,i)=><li key={i}>{meal.strMeal}</li>
            )}</ul>
            <hr />
            
            <h6>Food Added: {cart.length}</h6>
            <small>Total: {total}</small>
        </div>
    );
};
export default Side;