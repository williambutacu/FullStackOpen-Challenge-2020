import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// const Header = ({ course }) => {
//   return (
//     <h1>{course.name}</h1>
//   )
// }

// const Total = ({ course }) => {
//   const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
//   return(
//     <p>Number of exercises {sum}</p>
//   ) 
// }

// const Part = (props) => {
//   return (
//     <p>
//       {props.part.name} {props.part.exercises}
//     </p>    
//   )
// }

// const Content = ({ course }) => {
//   return (
//     <div>
//       <Part part={course.parts[0]} />
//       <Part part={course.parts[1]} />
//       <Part part={course.parts[2]} />
//     </div>
//   )
// }



ReactDOM.render(<App />, document.getElementById('root'))