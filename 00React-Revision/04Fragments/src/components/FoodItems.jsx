import React from 'react'
import Item from './Item'

function FoodItems() {
    let foodItems = ['Daal', 'Chawal', 'Roti', 'Hari Sabji', 'Dudh Dahi']

    return (
    <ul className="list-group">
        {foodItems.map((item)=>(<Item foodItems={item}></Item>))}
    </ul>
    )
}

export default FoodItems
