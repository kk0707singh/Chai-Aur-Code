
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"

function App() {
  let foodItems = ['Daal', 'Chawal', 'Roti', 'Hari Sabji', 'Dudh Dahi']

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items = {foodItems} />
      <FoodItems items = {foodItems} />
      
    </>
  )
}

export default App
