import React from 'react'
import Quote from './components/Quote'
import { data } from './data'


function App() {
  const [randomNumber, setRandomNumber] = React.useState(Math.floor(Math.random() * data.length))

  function changeNumber() {
    setRandomNumber(Math.floor(Math.random() * data.length))
  }

  return (
    <div className='container'>
      
      <Quote changeQuote={changeNumber} number={randomNumber} />
    </div>
  )
}

export default App
