import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from "./components/Statistics"
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

function handleGood(){
  setGood(good+1)
  
}

function handleNeutral(){
  setNeutral(neutral+1)

}

function handleBad(){
  setBad(bad+1)

}
let all = good+bad+neutral

let average = (good-bad)/all
let positive = good/all

  return (
    <Statistics
      handleGood={handleGood}
      handleBad={handleBad}
      handleNeutral={handleNeutral}
      all={all}
      average={average}
      positive={positive}
      good={good}
      neutral={neutral}
      bad={bad}
    />
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)