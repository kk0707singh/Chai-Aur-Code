import React from 'react'
import styles from './Item.module.css'

function Item({foodItems, bought, handleBuyButton}) {
    return (
        <li className={`list-group-item kg-item ${bought && 'active'}`}>{foodItems}
        <button className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}>Buy</button>
        </li>
    )
}

export default Item
