import React, {useEffect, useState} from 'react';
import './Container.css'
import Card from '../card/Card';

const Container = () => {
    const [items, setItems] = useState([])

    useEffect(() =>{
        fetch('./food.Json')
            .then(res => res.json())
            .then(data => console.log(data))
    },[])


    return (
        <div className='main-container'>
            <div className='main'>
                <h1>Hi there</h1>
                <Card></Card>
            </div>
            <div className='side'>
                <h1>Hello there</h1>
            </div>
        </div>
    );
};

export default Container;