import React from 'react'
import ToDo from './ToDo'
import styles from './ToDoItems.module.css'

function ToDoItems({todoItems}) {
    return (
    <div className={styles.itemContainer}>
        {todoItems.map((item) => (<ToDo todoName={item.name} todoDate={item.date}></ToDo>))}
    </div>
    )
}

export default ToDoItems
