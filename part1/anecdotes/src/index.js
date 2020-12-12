import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const n= anecdotes.length;
  const initialArray =Array(n).fill(0);
  const [voteArray, setVoteArray]= useState(initialArray)

  function handleClick(){
    setSelected(Math.floor(Math.random()*anecdotes.length));
  }

  function handleVote(){

   const temporaryArray = [...voteArray]
   temporaryArray[selected] +=1;
   setVoteArray([...temporaryArray])
   console.log(voteArray);
   console.log(temporaryArray)
   
  }
  let max = voteArray.reduce(function(a,b){

    return Math.max(a,b)
  })

   const maxAnecdote = voteArray.findIndex(function(maximum){
     return ( maximum === max )
   });
   console.log(maxAnecdote)
  console.log()


  return (
    <div>
    <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <div>
      <button onClick={handleClick}>Next anecdote</button>
      <button onClick={handleVote}>Vote</button>
      </div>
      <div><h1>Anecdotes with most votes</h1>
      <p>{anecdotes[maxAnecdote] } </p>    </div>
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

