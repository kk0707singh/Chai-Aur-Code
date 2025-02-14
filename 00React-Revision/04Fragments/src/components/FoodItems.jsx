import React from 'react'

function FoodItems() {
    let foodItems = ['Daal', 'Chawal', 'Roti', 'Hari Sabji', 'Dudh Dahi']

    return (
    <ul className="list-group">
        {foodItems.map((item)=><li className="list-group-item">{item}</li>)}
    </ul>
    )
}

export default FoodItems
