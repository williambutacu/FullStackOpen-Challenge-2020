import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name:""
      }
  ]) 
  const [ newName, setNewName ] = useState('')

function handleChange(event) {
  setNewName(event.target.value)
}

function handleSubmit(event) {
  event.preventDefault();
  
  const personObject={
    name:newName
  }
  setPersons(persons.concat(personObject))
  
  setNewName("")
}

function alreadyExist(event) {
  event.preventDefault();
  alert(`${newName} already exists`)
  
}
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={persons.filter(person=>person.name===newName).length>0? alreadyExist:handleSubmit}>
        <div>
          <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>{
        return (
          <p key={person.name}> {person.name}</p>
        )
      })}
    </div>
  )
}

export default App