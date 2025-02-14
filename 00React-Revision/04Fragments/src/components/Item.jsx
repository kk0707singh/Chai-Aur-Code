import React from 'react'

function Item(props) {
    return (
        <li key={props.item} className="list-group-item">{props.foodItems}</li>
    )
}

export default Item
