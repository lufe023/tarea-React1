import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import color from './tools/colors'
import QuoteBox from './components/QuoteBox'
import authorPhotos from './json/authorPhotos.json'
import PhotoAuthor from './components/PhotoAuthor'

function App() {
  
  const getRandomElement = arr =>{
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }



  let quoteRandom = getRandomElement(quotes)
  let colorRandom = getRandomElement(color)



  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)
  
  const objStyle = {
    backgroundColor: randomColors,
    color:randomColors
  }

  const getRandomAll = () => {

  quoteRandom = getRandomElement(quotes)
  colorRandom = getRandomElement(color)
  setRandomQuote(quoteRandom)
  setRandomColors(colorRandom)
  
  }

  return (
    <div className="App" style={objStyle}>
  
    <QuoteBox
      randomQuote={randomQuote}
      randomColors={randomColors}
      getRandomAll={getRandomAll}
      />
    <PhotoAuthor 
    randomQuote={randomQuote}
  />
    </div>
  )
}

export default App
