
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import './App.css';
import ToDoItems from './components/ToDoItems';
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    // console.log(`New item Added: ${itemName} Date: ${itemDate}`);
    const newTodoItems = [...todoItems, {name: itemName,
      date: itemDate}]
      setTodoItems(newTodoItems);  
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !==todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`item deleted: ${todoItemName}`);
    
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage/>}
      <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></ToDoItems>
    </center>
  )
}

export default App
