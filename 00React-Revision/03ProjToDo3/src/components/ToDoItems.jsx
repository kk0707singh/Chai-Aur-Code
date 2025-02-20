import React from 'react'
import ToDo from './ToDo'
import styles from './ToDoItems.module.css'

function ToDoItems({todoItems, onDeleteClick}) {
    return (
    <div className={styles.itemContainer}>
        {todoItems.map((item) => (<ToDo key={item.name} todoName={item.name} todoDate={item.date}
        onDeleteClick={onDeleteClick}></ToDo>))}
    </div>
    )
}

export default ToDoItems
