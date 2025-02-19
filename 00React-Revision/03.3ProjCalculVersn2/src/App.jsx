
import { useState } from 'react'
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {

  let [calVal, setCalVal] = useState("");
  let onButtonClick = (event) => {
  if(event === 'C'){
    setCalVal('')
  } else if (event === '='){
    const result = eval(calVal)
    setCalVal(result)
  } else {
    const newDisplayValue = calVal+ event;
    setCalVal(newDisplayValue);
  }

}
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
