
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"
import { useState } from "react"

function App() {
  let foodItems = ['Daal', 'Chawal', 'Roti', 'Hari Sabji', 'Dudh Dahi', 'Kheer']
  let [textToShow, setTextToShow] = useState()
  console.log(`Current value of textState is: ${textToShow}`);
  

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setTextToShow(e.target.value)
    
  }

  return (
    <>
    <Container>
      <h1>Healthy Food</h1>
      <ErrorMessage items = {foodItems} />
      <FoodInput handleOnChange={handleOnChange}/>
      <p>{textToShow}</p>
      <FoodItems items = {foodItems} />  
    </Container>

    <Container>
      <p>
        Above is the list of healthy foodItems that are good for your health and well being
      </p>
    </Container>
    </>
  )
}

export default App
