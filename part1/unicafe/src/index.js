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



  return (<div>
    <h1>Give feedback</h1>
    <button onClick={handleGood}>Good</button>
    <button onClick={handleNeutral}>Neutral</button>
    <button onClick={handleBad}>Bad</button>
    {all===0 ? <h1>No feedback given</h1> :  <Statistics
     
      all={all}
      average={average}
      positive={positive}
      good={good}
      neutral={neutral}
      bad={bad}
    />}
   
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)