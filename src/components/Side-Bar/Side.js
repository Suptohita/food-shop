import React from 'react';


// cart style 

const sideStyle ={
    border: '3px solid indianred',
    padding:'20px 30px', 
    borderRadius:'10px', 
    position: 'fixed'
}


const Side = (props) => {
    const {cart} = props
    const total = cart?.reduce((previous, product) => previous + parseInt(product?.price), 0)

// update cart 

    return (
        <div style={sideStyle}>
            <h4>Added Meal: {cart.length}</h4>
            <ul>
                {cart.map((meal,i)=><li key={i}>{meal.strMeal}</li>)}
            </ul>
            <hr />
            <small>Total: {total}</small>
        </div>
    );
};
export default Side;