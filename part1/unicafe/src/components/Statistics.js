import React from "react";


function Statistics(props) {
    return(
        <div>
      <h1>Give feedback</h1>
      <button onClick={props.handleGood}>Good</button>
      <button onClick={props.handleNeutral}>Neutral</button>
      <button onClick={props.handleBad}>Bad</button>
<br>
</br>
<h1>Statistics</h1>
<p>Good {props.good}</p>
<p>Neutral {props.neutral}</p>
<p>Bad {props.bad}</p>
<p>Average {props.average}</p>

<p>Positive {props.positive} %</p>
<p>All {props.all}</p>

    </div>
    )

}


export default Statistics