import React, {useEffect, useState} from 'react';
import './Container.css'
import Card from '../card/Card';
import Side from '../Side-Bar/Side';

const Container = () => {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('./food.JSON')
            .then(res => res.json())
            .then(data => setItems(data))
    },[])


    const addToCart = (item) => {
        const newCart = [...cart, item]
        setCart(newCart)

    }
    
    // console.log(items)



    return (
        <div className='main-container'>
            <div className='main row row-cols-1 row-cols-md-3 g-4'>
                {
                    items.map(item => <Card key={item.idMeal} item={item} addToCart = {addToCart}></Card>)
                }
            </div>
            <div className='side'>
                {/* <h2>Added Food: {cart.length}</h2>
                <h2>{console.log(cart)}</h2> */}
                <Side cart = {cart}></Side>
            </div>
        </div>
    );
};



export default Container;