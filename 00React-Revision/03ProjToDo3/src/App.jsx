
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import './App.css';
import ToDoItems from './components/ToDoItems';

function App() {

  const todoItems = [
    {
      name: "Buy Milk",
      date: "04/01/2025",
    },
    {
      name: "Go to College",
      date: "04/01/2025",
    },
    {
      name: "Like this Video",
      date: "19/02/2025",
    },
  ]
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  )
}

export default App
