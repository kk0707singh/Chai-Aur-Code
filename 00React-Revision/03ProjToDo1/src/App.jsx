
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import ToDo1 from './components/ToDo1';
import ToDo2 from './components/ToDo2';
import './App.css';

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div class='item-container'>
      <ToDo1></ToDo1>
      <ToDo2></ToDo2>
      </div>


    </center>
  )
}

export default App
