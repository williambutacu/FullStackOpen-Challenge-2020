import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  )
}

const Part =(props) =>{
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) =>{
  return(
    <div>
    <Part part='Fundamentals of React' exercise="10" />
    <Part part='Using props to pass data' exercise="7" />
    <Part part='State of a component' exercise="14" />
</div>
  )
}

const Total = (props) =>{
  const exercises1 = 10;
  const exercises2 = 7
  const exercises3 = 14
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

const App = () => {
   

  return (
    <div>

      <Header course='Half Stack application development'/>
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))