import React from 'react'
import Item from './Item'

function FoodItems({ items }) {
    // let foodItems = ['Daal', 'Chawal', 'Roti', 'Hari Sabji', 'Dudh Dahi']

    return (
    <ul className="list-group">
        {items.map((item)=>(<Item key={item} foodItems={item}></Item>))}
    </ul>
    )
}

export default FoodItems
