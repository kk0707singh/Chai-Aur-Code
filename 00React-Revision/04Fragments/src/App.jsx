
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"
import { useState } from "react"

function App() {
  // let foodItems = ['Daal', 'Chawal', 'Roti', 'Hari Sabji', 'Dudh Dahi', 'Kheer']
  let [foodItems, setFoodItems] = useState([]);
  const onKeyDown = (e) => {
    if(e.key === 'Enter'){
      let newFoodItem = e.target.value;
      e.target.value = '';
      let newItems = ([...foodItems, newFoodItem]);
      setFoodItems(newItems);
    }    
  }

  return (
    <>
    <Container>
      <h1>Healthy Food</h1>
      <FoodInput handleKeyDown = {onKeyDown}/>
      <ErrorMessage items = {foodItems} />
      <FoodItems items = {foodItems} />  
    </Container>

    <Container>
      <p>
        Above is the list of healthy foodItems that are good for your health 
        and well being
      </p>
    </Container>
    </>
  )
}

export default App
