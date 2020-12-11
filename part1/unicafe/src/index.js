import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from "./components/Statistics"
import Button from "./components/Button"
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
    <Button 
      handleGood={handleGood}
      handleBad={handleBad}
      handleNeutral={handleNeutral}
    />
    <h1>Statistics</h1>
    {all===0? <h1>No feedback given</h1>: <div><table><tbody><Statistics text="good" value={good} />
    <Statistics text="neutral" value={neutral} />
    <Statistics text="bad" value={bad} />
    <Statistics text="all" value={all} />
    <Statistics text="average" value={average} />
    <Statistics text="positive" value={positive} /></tbody></table></div>}
    

   
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)