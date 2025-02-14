
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"

function App() {

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage />
      <FoodItems />
    </>
  )
}

export default App
