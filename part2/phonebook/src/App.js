import React, { useState } from 'react'

const App = () => {

  const [ newName, setNewName ] = useState({
    name:"",
    phone:""
  })
  const [ persons, setPersons ] = useState([{
    name: "Angela",
    phone:"0747"
  }]) 
  const [search, setSearch] = useState("")

  const nameExists= persons.filter(person=>person.name===newName.name).length>0;
  const phoneExists= persons.filter(person=>person.phone===newName.phone).length>0;


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

function handleSearchChange(event) {
  setSearch(event.target.value)

}

function handleSearchSubmit(event){
  event.preventDefault();
  const searchExists= persons.filter(person=>person.name===search).length>0;
  return(searchExists? alert(`${search} is in the phonebook`): alert("There is no such contact"))
}



function nAlreadyExist(event) {
  event.preventDefault();
  alert(`${newName.name} already exists in the phonebook`)
}

function pAlreadyExist(event) {
  event.preventDefault();
  alert(`${newName.phone} already exists in the phonebook`)
}




return (
    <div>
    <h2>Search by name</h2>
    <form onSubmit={handleSearchSubmit}>
      <input value={search} onChange={handleSearchChange} />
      <button type="submit">Search</button>
    </form>
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