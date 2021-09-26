import React from 'react';
import './Card.css'

const Card = (props) => {
    const {strMeal, strCategory, strArea, strTags, strMealThumb, price} = props.item
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 hello'>
            <div className='col div-card' style={{width: '32rem'}}>
                <div className='card'>
                    <img src={strMealThumb} alt="" />
                    <div className="card-body">
                        <h3 className="card-title">
                            Name: {strMeal}
                        </h3>
                        <h5 className="card-text">
                            Category : {strCategory}
                        </h5>
                        <h5>
                            Origin: {strArea}
                        </h5>
                        <h5>
                            Type: {strTags}
                        </h5>
                        <br/>
                        <h6>Price: ${price}</h6>
                        <button className='cart' onClick= {()=>props.addToCart(props.item)}>Add to cart</button>
                        <br/>
                        <br/>
                        <h6>Follow us:</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;