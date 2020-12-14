import React, { useState } from 'react'

const App = () => {
  const [ newName, setNewName ] = useState({
    name:"",
    phone:""
  })
  const [ persons, setPersons ] = useState([]) 


function handleChange(event) {
  const {value , name} = event.target;
  setNewName(prevValue=>{
    return { ...prevValue,
      [name]: value
    }
  })
}

function handleSubmit(event) {
  event.preventDefault();
  
  const personObject={
    name:newName.name,
    phone:newName.phone
  }
  setPersons(persons.concat(personObject))
  
  setNewName({name:"", phone:""})
}

function nAlreadyExist(event) {
  event.preventDefault();
  alert(`${newName.name} already exists in the phonebook`)
}

function pAlreadyExist(event) {
  event.preventDefault();
  alert(`${newName.phone} already exists in the phonebook`)
}

const nameExists= persons.filter(person=>person.name===newName.name).length>0;
const phoneExists= persons.filter(person=>person.phone===newName.phone).length>0;


return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={nameExists? nAlreadyExist : phoneExists? pAlreadyExist: handleSubmit}>
        <div>
          <input value={newName.name} onChange={handleChange} name="name"/>
        </div>
        <div>
          <input value={newName.phone} onChange={handleChange} name="phone" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>{
        return (
          <p key={person.name}> {person.name} {person.phone}</p>
        )
      })}
    </div>
  )
}

export default App