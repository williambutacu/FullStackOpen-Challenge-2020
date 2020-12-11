import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll]=useState(0)

function handleGood(){
  setGood(good+1)
  setAll(all+1)
  
}

function handleNeutral(){
  setNeutral(neutral+1)
  setAll(all+1)

}

function handleBad(){
  setBad(bad+1)
  setAll(all+1)

}

let average = (good-bad)/all
let positive = good/all
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
<br>
</br>
<h1>Statistics</h1>
<p>All {all}</p>
<p>Good {good}</p>
<p>Neutral {neutral}</p>
<p>Bad {bad}</p>
<p>Average {average}</p>

<p>Positive {positive} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)