import React from 'react'
import styles from './Item.module.css'

function Item({foodItems, handleBuyButton}) {
    return (
        <li className="list-group-item kg-item">{foodItems}
        <button className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}>Buy</button>
        </li>
    )
}

export default Item
